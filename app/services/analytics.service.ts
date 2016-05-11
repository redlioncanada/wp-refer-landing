import {Injectable} from 'angular2/core'
import {LoggerService} from './logger.service'
import {EnvironmentService} from './environment.service'

declare var ga;

@Injectable()
export class AnalyticsService {
	public enabled: boolean
	private debug: boolean
	private bindings
	private window

	constructor(private logger: LoggerService, private env: EnvironmentService) {
		this.debug = false
		this.bindings = []
	}

	public afterViewInit() {
		this.window = window
		if (!this.enabled) this.enabled = this.gaObjectExists()
	}

	public sendEvent(props) {
		this.enabled = this.gaObjectExists()

		props = this.fillBindings(props)

		if (this.propsAreEmpty(props)) {
			this.logger.error(this, `ignored a ${props.eventType} event because all of it's properties are empty!`)
			return
		}

		if (this.debug) {
			this.logger.log(this, `got a ${props.eventType} event, c:${props.category}, a:${props.action}, l:${props.label}`)
		} else {
			if (this.enabled) {
				ga('send', 'event',
					props.category ? props.category : '',
					props.action ? props.action : '',
					props.label ? props.label : '')
			} else {
				this.logger.error(this, `ignored a ${props.eventType} event with the name ${props.action} because ga hasn't loaded yet!`)
			}
		}
	}

	public bind(keyword, fn) {
		if (typeof fn !== 'function') return
		this.bindings.push({ 'keyword': keyword, 'function': fn })
	}

	public debugMode(val: boolean) {
		if (val) this.logger.log(this, `Now in debug mode`)
		this.debug = val;
	}

	private propsAreEmpty(props) {
		if (Object.keys(props).length == 1) return true
		for (var i in props) {
			if (i == 'eventType') continue
			if (typeof props[i] === 'string' && props[i].length) return false
		}
		return true
	}

	private gaObjectExists() {
		return this.window && 'ga' in this.window && typeof this.window['ga'] !== 'undefined' && this.window['ga']
	}

	private fillBindings(arr) {
		for (var i in arr) {
			arr[i] = this.fillBinding(arr[i])
		}
		return arr
	}

	private fillBinding(str) {
		if (!str || typeof str === 'undefined' || !str.length) return false

		for (var i in this.bindings) {
			if (str.indexOf(`@${this.bindings[i].keyword}`) > -1) {
				//matched keyword
				var replace = this.bindings[i]['function'].call(this, str)
				str = str.replace(`@${this.bindings[i].keyword}`, replace)
				if (!replace) this.logger.log(this, `${this.bindings[i].keyword} bind callback returned an empty string`)
			}
		}

		if (str.indexOf('@') > -1) {
			this.logger.error(this, `unrecognized binding in ${str}, ignoring`)
			return false
		}

		return str
	}
}
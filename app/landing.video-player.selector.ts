import {Component, View, Input, Output, EventEmitter} from 'angular2/core'
import {Logger} from './services/logger.service'
import {GoogleApi} from './services/googleapi.service'
import {VideoPlayer} from './landing.video-player'

@Component({
	selector: 'videoplayer-selector',
    templateUrl: 'app/views/landing.video-player.selector.view.html'
})
export class VideoPlayerSelector {
	@Input() data
	@Input() id
	@Input() selected
	@Output() selectedVideo = new EventEmitter()
	ready: boolean

	constructor(private logger: Logger, private api: GoogleApi) {
		this.ready = false
		this.selected = false
	}

	ngOnInit() {
		let self = this
		if (this.data.id && this.data.id.length && !(this.data.desc && this.data.desc.length)) {
			this.api.video(this.data.id, function(data, err) {
				if (data && !err) {
					self.initialize(data)
				} else {
					self.logger.error(err)
				}
			})
		}
	}

	initialize(data) {
		//assumes 1 result
		data = data.items[0];
		this.data.desc = data.snippet.description.replace(/\\n/g, '');
		this.ready = true
	}

	select() {
		this.selectedVideo.emit(this.id)
		this.selected = true
	}
}
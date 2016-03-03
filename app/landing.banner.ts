import {Component, Input} from 'angular2/core'
import {LearnMoreButton} from './landing.learn-more.button'
import {AppData} from './services/appdata.service'
import {Logger} from './services/logger.service'

@Component({
    selector: 'banner',
    templateUrl: 'app/views/landing.banner.view.html',
    directives: [LearnMoreButton],
})
export class Banner {
	private ctaText: string
	private link: string
	private image: string
	private enabled: boolean

	constructor(private appdata: AppData, private logger: Logger) {
		this.enabled = true
		var data = appdata.get()
		this.enabled = data.banner.enabled
		this.link = data.banner.link
		this.image = data.banner.image
		this.ctaText = data.banner.ctaText
	}
}
import {Component, Input} from 'angular2/core'
import {LearnMoreButton} from './landing.learn-more.button'
import {AppDataService} from './services/appdata.service'
import {LoggerService} from './services/logger.service'

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

	constructor(private appdata: AppDataService, private logger: LoggerService) {
		this.enabled = true
		var data = appdata.get()
		this.enabled = data.banner.enabled
		this.link = data.banner.link
		this.image = data.banner.image
		this.ctaText = data.banner.ctaText
	}
}
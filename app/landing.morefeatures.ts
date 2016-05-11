import {Component} from 'angular2/core'
import {MoreFeaturesFeature} from './landing.morefeatures.feature'
import {AppDataService} from './services/appdata.service'
import {LoggerService} from './services/logger.service'

@Component({
    selector: 'more-features',
    templateUrl: 'app/views/landing.morefeatures.view.html',
    directives: [MoreFeaturesFeature],
})
export class MoreFeatures {
	public moreFeatures
	public title
	private enabled

	constructor(private appdata: AppDataService, private logger: LoggerService) {
		this.enabled = true
		var data = appdata.get()
		this.enabled = data.morefeatures.enabled
		this.title = data.morefeatures.title
		this.moreFeatures = data.morefeatures.features
	}
}
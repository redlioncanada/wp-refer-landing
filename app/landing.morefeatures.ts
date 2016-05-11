import {Component} from 'angular2/core'
import {MoreFeaturesFeature} from './landing.morefeatures.feature'
import {AppDataService} from './services/appdata.service'
import {LoggerService} from './services/logger.service'

@Component({
    selector: 'more-features',
    template: `
    	<div class="row {{!enabled ? 'hide' : ''}}">
			<h2>{{title}}</h2>
		    <more-features-feature *ngFor="#feature of moreFeatures; #i=index" [cta]="feature.cta" [text]="feature.text" [link]="feature.link" [title]="feature.title" [image]="feature.image" [alt]="feature.alt">
		    </more-features-feature>
		</div>
    `,
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
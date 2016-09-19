import {Component} from 'angular2/core'
import {FeatureButton} from './landing.feature.button'
import {FeatureModel} from './models/features.model'
import {AppDataService} from './services/appdata.service'

@Component({
    selector: 'features',
    template: `
        <div class="row {{!enabled ? 'hide': ''}}">
            <h2 class="title">{{title}}</h2>
            <feature-button *ngFor="#feature of featureButtons; #i=index" [timeline]="feature.timeline" [btnIcon]= "feature.btnIcon" [btnTitle]= "feature.btnTitle" [btnRollOverCopy]="feature.btnRollOverCopy" [btnRollOverCTA]="feature.btnRollOverCTA" [btnAlt]="feature.btnAlt" [btnType]="feature.btnType" [btnLink]="feature.btnLink">

            </feature-button>
        </div>
    `,
	directives: [FeatureButton]
})

export class Features {
    public featureButtons:Array<FeatureModel> = new Array<FeatureModel>()
    public title:string
    private enabled: boolean

    constructor(private appdata: AppDataService) {
        this.enabled = true
        var data = appdata.get()
        this.enabled = data.features.enabled
        this.title = data.features.title

        for (var i in data.features.features) {
            var feature = data.features.features[i]
            this.featureButtons.push(
                new FeatureModel(
                    feature.image,
                    feature.title,
                    feature.desc,
                    feature.cta,
                    feature.link,
                    feature.type,
                    feature.alt
                )
            )
        }
    }
}
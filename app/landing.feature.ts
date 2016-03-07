import {Component} from 'angular2/core'
import {FeatureButton} from './landing.feature.button'
import {FeatureModel} from './models/features.model'
import {AppData} from './services/appdata.service'

@Component({
    selector: 'features',
    templateUrl: 'app/views/landing.feature.view.html',
	directives: [FeatureButton],
})

export class Features {
    public featureButtons:[FeatureModel] = [];
    private enabled: boolean

    constructor(private appdata: AppData) {
        this.enabled = true
        var data = appdata.get()
        this.enabled = data.features.enabled
        
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
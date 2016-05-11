import {Component} from 'angular2/core';
import {AppDataService} from './services/appdata.service'

@Component({
    selector: 'masthead',
    template: `
    	<div class="{{!enabled ? 'hide': ''}}">
			<div id="wp-landing-masthead"><img src="{{image}}" alt="{{alt}}" /></div>
		</div>
    `
})
export class AppMasthead {
	private image: string
	private title: string
	private enabled: boolean
	private alt: string

	constructor(private appdata: AppDataService) {
		this.enabled = true
		var data = appdata.get()

		this.enabled = data.masthead.enabled
		this.image = data.masthead.image
		this.title = data.masthead.title
		this.alt = data.masthead.alt
	}
}
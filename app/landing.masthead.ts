import {Component} from 'angular2/core';
import {AppData} from './services/appdata.service'

@Component({
    selector: 'masthead',
    templateUrl:'app/views/masthead.view.html'
})
export class AppMasthead {
	private image: string
	private title: string
	private enabled: boolean

	constructor(private appdata: AppData) {
		this.enabled = true
		var data = appdata.get()

		this.enabled = data.masthead.enabled
		this.image = data.masthead.image
		this.title = data.masthead.title
	}
}
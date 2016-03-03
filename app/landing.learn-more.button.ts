import {Component, Input, Inject} from 'angular2/core'

@Component({
    selector: 'learn-more-button',
    templateUrl: 'app/views/landing.learn-more.button.view.html'
})
export class LearnMoreButton {
	@Input() link
	@Input() text
}
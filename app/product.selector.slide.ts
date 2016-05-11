import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {LearnMoreButton} from './landing.learn-more.button'


@Component({
    selector: 'product-slide',
    template: `
        <div id="{{fridgeId}}" class="rl-wp-lndng-side">
            <div class="rl-wp-lndng-fridge-title mobile">{{fridgeTitle}}</div>
            <div class="rl-wp-lndng-fridge"><img class="{{fridge}}" src="{{fridge}}" alt="{{fridgeAlt}}" /></div>
            <div class="rl-wp-lndng-fridge-title">{{fridgeTitle}}</div>
            <div class="rl-wp-lndng-fridge-desc">{{fridgeDescription}}</div>
            <learn-more-button [link]="fridgeUrl" [text]="ctaText"></learn-more-button>
        </div>
    `,
    directives: [LearnMoreButton]
})
export class ProductSlide {
    // This is where the animation code goes for each slide
    @Input() fridge
    @Input() fridgeTitle
    @Input() fridgeDescription
    @Input() fridgeUrl
    @Input() fridgeId
    @Input() selected
    @Input() ctaText
    @Input() fridgeAlt
}
import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'

declare var $: JQueryStatic;

@Component({
    selector: 'feature-button',
    template: `
        <a href="{{btnLink}}">
            <div class="wp-landing-feature-button" >
                <!-- I don't know.  I just like spacing my code with comments -->
                <div class="wp-landing-feature-button-up">
                    <div class="wp-landing-feature-icon wp-landing-innerBtn"><img class="{{btnType}}" src={{btnIcon}} alt="{{btnAlt}}" /></div>
                    <div class="wp-landing-feature-title wp-landing-innerBtn">{{btnTitle}}</div>
                    <div class="wp-landing-feature-rule wp-landing-innerBtn"></div>
                    <p class="wp-landing-over-copy">{{btnRollOverCopy}}</p>
                    <p class="wp-landing-over-cta">{{btnRollOverCTA}}</p>
                </div>
            </div>
        </a>
    `
})

export class FeatureButton {
    @Input() btnIcon
    @Input() btnTitle
    @Input() btnRollOverCopy
    @Input() btnRollOverCTA
    @Input() btnLink
    @Input() btnType
    @Input() btnAlt

    private rootElement;
    private elementRef: ElementRef;
    private target;
    private targetWidth;
    private targetHeight;

    public constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this.elementRef = elementRef
        this.rootElement = $(this.elementRef.nativeElement)
    }

    public playAnimations(bType:string){
            switch(bType) {
                case "cart":
                    TweenMax.to(this.target, 2, {delay:1, css: {transform:"scale(1)"}, ease:Elastic.easeOut});
                    break;
                case "star":
                    TweenMax.to(this.target, 2, {delay:1.3, css: {transform:"scale(1)"}, ease:Elastic.easeOut});
                    break;
                case "magnifier":
                    TweenMax.to(this.target, 2, {delay:1.6, css: {transform:"scale(1)"}, ease:Elastic.easeOut});
                    break;
                }
    }

    public resetAnimations(){
            switch(this.btnType) {
            case "cart":
                TweenMax.to(this.target, 0, {delay:0, opacity:1, css: { transform: "scale(0.01)" }, ease:Power3.easeOut});
                break;
            case "star":
                TweenMax.to(this.target, 0, {delay:0, opacity:1, css: { transform: "scale(0.01)" }, ease:Power3.easeOut});
                break;
            case "magnifier":
                TweenMax.to(this.target, 0, {delay:0, opacity:1, css: { transform: "scale(0.01)" }, ease:Power3.easeOut});
                break;
            }
             this.playAnimations(this.btnType);
    }

    private ngAfterViewInit() {
        this.target = $(this.rootElement).find('img')
        this.targetWidth = $(this.rootElement).find('img').parent().width()
        this.targetHeight = $(this.rootElement).find('img').parent().height()
       this.resetAnimations();
    }
}
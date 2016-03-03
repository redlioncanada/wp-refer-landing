/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/greensock/greensock.d.ts" />
import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {TimelineController} from './landing.timeline-controller'

declare var $: JQueryStatic;

@Component({
    selector: 'feature-button',
    templateUrl: 'app/views/landing.feature.button.view.html',
})

export class FeatureButton extends TimelineController {
    @Input() btnIcon
    @Input() btnTitle
    @Input() btnRollOverCopy
    @Input() btnRollOverCTA
    @Input() btnLink
    @Input() btnType

    private rootElement;
    private elementRef: ElementRef;
    private target;
    private targetWidth;
    private targetHeight;

    public constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this.elementRef = elementRef
        this.rootElement = $(this.elementRef.nativeElement)

        super()
    }
    
    public playAnimations(bType:string){
        console.log(bType)
            switch(bType) {
                case "cart":
                    //TweenMax.to(this.target, 1, {delay:1.5, left:0, ease:Power3.easeOut});
                    //TweenMax.to(this.target, 1, {delay:2, left:50, css: {transform:"rotate(5deg)"}, ease:Power3.easeOut});
                    //TweenMax.to(this.target, .3, {delay:2.5, css: {transform:"rotate(0deg)"}, ease:Bounce.easeOut});
                    //TweenMax.to(this.target, 1, {delay:6, left:150, opacity:0, ease:Power3.easeIn});
                    TweenMax.to(this.target, 2, {delay:1, css: {transform:"scale(1)"}, ease:Elastic.easeOut});
                    break;
                case "star":
                    //TweenMax.to(this.target, 1, {delay:2.2, top: 0, ease:Bounce.easeOut});
                    //TweenMax.to(this.target, 1, {delay:6, top:150, opacity:0, ease:Power3.easeIn});
                    TweenMax.to(this.target, 2, {delay:1.3, css: {transform:"scale(1)"}, ease:Elastic.easeOut});
                    break;
                case "magnifier":
                    TweenMax.to(this.target, 2, {delay:1.6, css: {transform:"scale(1)"}, ease:Elastic.easeOut});
                    //TweenMax.to(this.target, 1, {delay:6, opacity:0, ease:Power3.easeIn});
                    break;
                }
    }
    
    public resetAnimations(){
            
            switch(this.btnType) {
            case "cart":
                //TweenMax.to(this.target, 0, {delay:0, opacity:1, left:-150, ease:Power3.easeOut});
                TweenMax.to(this.target, 0, {delay:0, opacity:1, css: { transform: "scale(0.01)" }, ease:Power3.easeOut});
                break;
            case "star":
                //TweenMax.to(this.target, 0, {delay:0, opacity:1, top:-160, ease:Power3.easeOut});
                TweenMax.to(this.target, 0, {delay:0, opacity:1, css: { transform: "scale(0.01)" }, ease:Power3.easeOut});
                break;
            case "magnifier":
                TweenMax.to(this.target, 0, {delay:0, opacity:1, css: { transform: "scale(0.01)" }, ease:Power3.easeOut});
                break;
            }
             this.playAnimations(this.btnType);
    }
    
   

    private ngAfterViewInit() {

        //this is ugly, but the syntax of gsap restricts me from decoupling animations from their target element
        //I could probably adjust timeline-controller to instantiate timelines without specifying a target element
        //but just want to get it working for now
        
        //Not that ugly, but didn't hit the ask.
        
        this.target = $(this.rootElement).find('img')
        this.targetWidth = $(this.rootElement).find('img').parent().width()
        this.targetHeight = $(this.rootElement).find('img').parent().height()
        
        

       /* switch(this.btnType) {
            case "cart":
                this.timeline.to(target, 0, { left: "-="+width })
                    .to(target, 1, { ease: Power4.easeOut, left: "+="+width })
                    .to(target, 0.2, { ease: Power1.easeOut, css: {transform:"rotate(5deg)"} }).add('stop')
                    .to(target, 0.1, { left: "+=" + 1 }, 'stop').add('backDown')
                    .to(target, 0.1, { left: "-=" + 1 }, 'backDown')
                    .to(target, 0.1, { ease: Power1.easeIn, css: {transform:"rotate(0deg)"} })
                break;
            case "star":
                this.timeline.add('start').set({}, {}, 'start=2')
                    .to(target, 0, { top: "-="+height })
                    .to(target, 1, { ease: Bounce.easeOut, top: "+="+height })
                break;
            case "magnifier":
                this.timeline.add('start').set({}, {}, 'start=3')
                    .to(target, 0, { opacity: 0, css: { transform: "scale(0.2)" } })
                    .to(target, .5
                    , { ease: Back.easeOut, opacity: 1, css: {transform:"scale(1)"} })
                break;
        } */

        //setInterval(() => {
        //    this.restart()
       // }, 10000)
       this.resetAnimations();
    }
}
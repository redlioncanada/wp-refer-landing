/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/greensock/greensock.d.ts" />
import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Output, Inject, ElementRef, EventEmitter} from 'angular2/core'
import {ProductSlide} from './product.selector.slide'
import {ProductModel} from './models/products.model'
import {TimelineController} from './landing.timeline-controller'

declare var $: JQueryStatic;

@Component({
    selector: 'product-slides',
    templateUrl: 'app/views/product.selector.slides.view.html',
    directives: [ProductSlide]
})
export class ProductSlides extends TimelineController {
    @Input() products;
    @Input() selectedProduct;
    @Output() isAnimating = new EventEmitter();

    private rootElement;
    private elementRef: ElementRef;
    private _animating: boolean;

    private imageTop;
    private titleTop;
    private descTop;
    private learnTop;

    set animating(a:boolean) {
        if (this._animating != a) {
            this._animating = a
            this.isAnimating.emit(a)
        }
    }

    public constructor(@Inject(ElementRef) elementRef: ElementRef) {
        super()
        this.elementRef = elementRef
        this.animating = false
        this.imageTop = 155;
        this.titleTop = 170;
        this.descTop = 215;
        this.learnTop = 500;
    }

     private ngAfterViewInit() {
          this.rootElement = $(this.elementRef.nativeElement)
          var target = this.selectedProduct.prodId
          this.playIn(this,true,target)
      }

      private ngOnChanges(changes) {
          var self = this
          if ("selectedProduct" in changes && !this.animating) {
              this.playOut(changes.selectedProduct.previousValue.prodId, function() {

                 //just get it done
                if (changes.selectedProduct.currentValue.prodId == 'under-counter' && $('product-selector').hasClass('fr') && $(window).innerWidth() > 820) {
                  self.descTop = 265;
                } else {
                  self.descTop = 215;
                }

                self.playIn(self, false, changes.selectedProduct.currentValue.prodId)
              })
          }
      }

      public playOut(target, cb) {
          var self = this
          target = $(this.rootElement).find('#'+target)

          var image = ($(target).find('.rl-ka-lndng-fridge'))
          var title = ($(target).find('.rl-ka-lndng-fridge-title'))
          var desc = ($(target).find('.rl-ka-lndng-fridge-desc'))
          var learn = ($(target).find('learn-more-button'))

          this.animating = true;

          TweenMax.to(image, .3, { delay: 0, opacity: 0, ease: Power3.easeOut });
          TweenMax.to(title, .3, { delay: 0, opacity: 0, ease: Power3.easeOut });
          TweenMax.to(desc, .3, { delay: 0, opacity: 0, ease: Power3.easeOut });
          TweenMax.to(learn, .3, { delay: 0, opacity: 0, ease: Power3.easeOut, onComplete: function() {
              TweenMax.to(target, 0, { delay: 0, opacity: 0 });
              cb()
          }});
      }

      public playIn(self, delay = true, target) {
        if (!self) self = this
        target = $(self.rootElement).find('#' + target)

        $(self.rootElement).find('product-slide').css('zIndex', 1)
        $(target).parent().css('zIndex', 2)

        var image = ($(target).find('.rl-ka-lndng-fridge'))
        var title = ($(target).find('.rl-ka-lndng-fridge-title'))
        var desc = ($(target).find('.rl-ka-lndng-fridge-desc'))
        var learn = ($(target).find('learn-more-button'))

        var isMobile = $(window).innerWidth() <= 820

        if (isMobile) {
          TweenMax.to(image, 0, { delay: 0, top: -20 });
          TweenMax.to(title, 0, { delay: 0, top: -20 });
          TweenMax.to(desc, 0, { delay: 0, top: -20 });
          TweenMax.to(learn, 0, { delay: 0, top: -20 });
        } else {
          TweenMax.to(image, 0, { delay: 0, top: this.imageTop-20 });
          TweenMax.to(title, 0, { delay: 0, top: this.titleTop-20 });
          TweenMax.to(desc, 0, { delay: 0, top: this.descTop-20 });
          TweenMax.to(learn, 0, { delay: 0, top: this.learnTop-20 });
        }
        TweenMax.to(target, 0, { delay: 0.1, opacity: 1 });

        if (delay) {
          if (isMobile) {
            TweenMax.to(image, 1.5, { delay: .6, top: 0, opacity: 1, ease: Power1.easeOut });
            TweenMax.to(title, 1.5, { delay: .9, top: 0, opacity: 1, ease: Power1.easeOut });
            TweenMax.to(desc, 1.5, { delay: 1.2, top: 0, opacity: 1, ease: Power1.easeOut });
            TweenMax.to(learn, 1.5, {
              delay: 1.2, top: 0, opacity: 1, ease: Power1.easeOut, onComplete: function() {
                self.animating = false;
              }
            });
          } else {
            TweenMax.to(image, 1.5, { delay: .6, top: this.imageTop, opacity: 1, ease: Power1.easeOut });
            TweenMax.to(title, 1.5, { delay: .9, top: this.titleTop, opacity: 1, ease: Power1.easeOut });
            TweenMax.to(desc, 1.5, { delay: 1.2, top: this.descTop, opacity: 1, ease: Power1.easeOut });
            TweenMax.to(learn, 1.5, {
              delay: 1.2, top: this.learnTop, opacity: 1, ease: Power1.easeOut, onComplete: function() {
                self.animating = false;
              }
            });
          }
        } else {
          if (isMobile) {
            TweenMax.to(image, 1.5, { delay: .5, top: 0, opacity: 1, ease: Power1.easeOut });
            TweenMax.to(title, 1.5, { delay: 0.7, top: 0, opacity: 1, ease: Power1.easeOut });
            TweenMax.to(desc, 1.5, { delay: 0.9, top: 0, opacity: 1, ease: Power1.easeOut });
            TweenMax.to(learn, 1.5, {
              delay: 0.9, top: 0, opacity: 1, ease: Power1.easeOut, onComplete: function() {
                self.animating = false;
              }
            });
          } else {
            TweenMax.to(image, 1.5, { delay: .6, top: this.imageTop, opacity: 1, ease: Power1.easeOut });
            TweenMax.to(title, 1.5, { delay: .9, top: this.titleTop, opacity: 1, ease: Power1.easeOut });
            TweenMax.to(desc, 1.5, { delay: 1.2, top: this.descTop, opacity: 1, ease: Power1.easeOut });
            TweenMax.to(learn, 1.5, {
              delay: 1.2, top: this.learnTop, opacity: 1, ease: Power1.easeOut, onComplete: function() {
                self.animating = false;
              }
            });
          }
        }
      }
}
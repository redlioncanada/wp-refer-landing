import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {AppDataService} from './services/appdata.service'
import {InsertBreakPipe} from './insertBreak.pipe'

@Component({
    selector: 'product-selector-nav',
    pipes: [InsertBreakPipe],
    template: `
    	<div class="row {{!enabled ? 'hide' : ''}}">
			<div class="wp-refer-landing-product {{selectedProduct.prodId == product.prodId ? 'selected' : ''}}" *ngFor="#product of products; #i = index" (click)="select(product)">
				<img src="{{product.prodImage}}"/>
				<div class="wp-refer-landing-button">
					<div class="wp-refer-landing-button-circle"><div></div></div>
					<p [innerHtml]="product.prodName | insertBreak"></p>
				</div>
			</div>
			<a target="_blank" href="{{ctaLink}}"><div class="see-all">
				<div><p [innerHtml]="ctaText"></p></div>
			</div></a>
		</div>
    `
})

export class ProductSelectorNav {
	@Input() products
	@Input() selectedProduct
	@Output() productSelected = new EventEmitter()
	private ctaText: string
	private ctaLink: string
	private enabled: boolean

	constructor(private appdata: AppDataService) {
		this.enabled = true
		var data = appdata.get()

		this.enabled = data.productselector.enabled
		this.ctaText = data.productselector.nav.text
		this.ctaLink = data.productselector.nav.link
	}

	select(product) {
		this.productSelected.emit(product)
	}
}
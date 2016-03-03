import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {AppData} from './services/appdata.service'

@Component({
    selector: 'product-selector-nav',
    templateUrl: 'app/views/product.selector.nav.view.html'
})

export class ProductSelectorNav {
	@Input() products
	@Input() selectedProduct
	@Output() productSelected = new EventEmitter()
	private ctaText: string
	private ctaLink: string
	private enabled: boolean

	constructor(private appdata:AppData) {
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
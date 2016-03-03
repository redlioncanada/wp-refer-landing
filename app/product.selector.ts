import {Component} from 'angular2/core'
import {ProductSlides} from './product.selector.slides'
import {ProductSelectorNav} from './product.selector.nav'
import {AppData} from './services/appdata.service'
import {ProductModel} from './models/products.model'

@Component({
    selector: 'product-selector',
    templateUrl: 'app/views/product.selector.view.html',
    directives: [ProductSlides, ProductSelectorNav],
})
export class ProductSelector {
    public products: [ProductModel];
    public selectedProduct: ProductModel;
    public animating: Boolean;
    private title: string;
    private enabled: boolean

    constructor(private appdata:AppData) {
        this.enabled = true
        var data = appdata.get()

        this.enabled = data.productselector.enabled
        this.title = data.productselector.title
		this.products = []
        for (var i in data.productselector.products) {
            var product = data.productselector.products[i]
            this.products.push(
                new ProductModel(
                    product.image,
                    product.title,
                    product.desc,
                    product.link,
                    product.id,
                    product.ctaText
                )
            )
        }

		this.selectedProduct = this.products[0];
		this.animating = false;
    }

    ngOnChanges(changes) {
    	if ("selectedProduct" in changes) {
    		console.log('product selector changed product: ',changes.selectedProduct.currentValue)
    	}
    }

    //@Output on product.selector.nav
    productSelected(product) {
		if (!this.animating) {
			this.selectedProduct = product;
			console.log('product.selector got new product: ' + product.prodId)
		}
    }

    //@Output on product.selector.slides
    isAnimating(animating) {
		this.animating = animating;
    }
}
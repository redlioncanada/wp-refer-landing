import {Component} from 'angular2/core'
import {ProductSlides} from './product.selector.slides'
import {ProductSelectorNav} from './product.selector.nav'
import {AppDataService} from './services/appdata.service'
import {ProductModel} from './models/products.model'

@Component({
    selector: 'product-selector',
    template: `
        <div class="row" class="{{!enabled ? 'hide' : ''}}">
            <div>
                <h2 class="title">{{title}}</h2>
            </div>
            <product-slides [products]="products" [selectedProduct]="selectedProduct" (isAnimating)="isAnimating($event)"></product-slides>
            <product-selector-nav [products]="products" [selectedProduct]="selectedProduct" (productSelected)="productSelected($event)"></product-selector-nav>
        </div>
    `,
    directives: [ProductSlides, ProductSelectorNav],
})
export class ProductSelector {
    public products: Array<ProductModel>;
    public selectedProduct: ProductModel;
    public animating: Boolean;
    private title: string;
    private enabled: boolean

    constructor(private appdata:AppDataService) {
        this.enabled = true
        var data = appdata.get()

        this.enabled = data.productselector.enabled
        this.title = data.productselector.title
		this.products = new Array<ProductModel>()
        for (var i in data.productselector.products) {
            var product = data.productselector.products[i]
            this.products.push(
                new ProductModel(
                    product.image,
                    product.title,
                    product.desc,
                    product.link,
                    product.id,
                    product.ctaText,
                    product.alt
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
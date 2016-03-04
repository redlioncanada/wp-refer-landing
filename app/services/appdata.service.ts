
import {Injectable} from 'angular2/core';
import {Logger} from './logger.service'

@Injectable()
export class AppData {
	private contents;
	public language: string;
	private init: boolean

	constructor(private logger: Logger) {
		this.language = this.getLanguage()
		this.contents = {}
		this.contents.en = {
			masthead: {
				enabled: true,
				image: "./public/images/refer-landing-masthead.jpg",
				title: ""
			},
			banner: {
				enabled: true,
				link: 'http://www.whirlpool.ca/en_CA/everydaycare/',
				image: './public/images/banner.jpg',
				ctaText: 'Learn More'
			},
			features: {
				enabled: true,
				features: [
			        {
			        	image: "./public/images/refer-landing-shopping-cart.png",
			            title: "Buying Guide",
						desc: "What to look for when buying",
			            cta: "Click Here",
			            link: "http://whirlpool.ca",
			            type: "cart"
					},
			        {
			        	image: "./public/images/refer-landing-star.png",
			            title: "Ratings and Reviews",
			            desc: "See what others are saying",
			            cta: "Click Here",
						link: "http://www.whirlpool.ca/en_CA/2_3_90/jump-pages_best-products.content.html",
			            type: "star"
					},
					{
			        	image: "./public/images/refer-landing-mag-glass.png",
			        	title: "Find Your Whirlpool",
			        	desc: "Need help finding your refrigerator?",
			        	cta: "Click Here",
			        	link: "http://findmy.whirlpool.ca/#/question/Appliance",
			        	type: "magnifier"
			    	}
				]
			},
			morefeatures: {
				enabled: true,
				title: "Additional Features",
				features: [
					{
						title: "Additional Accessories",
						image: "./public/images/more-features-1.jpg",
						link: "http://whirlpool.ca",
						text: "",
						cta: ""
					},
					{
						title: "Water Filtration",
						image: "./public/images/more-features-2.jpg",
						link: "http://whirlpool.ca",
						text: "",
						cta: ""
					},
					{
						title: "Certified Care",
						image: "./public/images/more-features-3.jpg",
						link: "http://whirlpool.ca",
						text: "",
						cta: ""
					}
				]
			},
			videoplayer: {
				enabled: true,
				title: "Must-See Innovation",
				videos: [
					{
						image: './public/images/video-thumb-1.jpg',
						thumb: './public/images/video-select-1.jpg',
						title: 'Lorem ipsum dolor sit amet',
						ctaTitle: 'Perfect Places<sup>&trade;</sup>',
						cta: 'Play Video',
						desc: 'Nam ac vehicula nisl. Vestibulum auctor tellus vitae lectus dapibus, vel vehicula ante lobortis. Ut porttitor sagittis lectus a accumsan. Ut feugiat facilisis nunc, nec posuere nibh suscipit at. Etiam tempus purus sit amet sapien condimentum semper.'
					},
					{
						image: './public/images/video-thumb-2.jpg',
						thumb: './public/images/video-select-2.jpg',
						title: 'Lorem ipsum dolor sit amet',
						ctaTitle: 'Resource Saver<sup>&trade;</sup> & EasyView<sup>&trade;</sup>',
						cta: 'Play Video',
						desc: 'Nam ac vehicula nisl. Vestibulum auctor tellus vitae lectus dapibus, vel vehicula ante lobortis. Ut porttitor sagittis lectus a accumsan. Ut feugiat facilisis nunc, nec posuere nibh suscipit at. Etiam tempus purus sit amet sapien condimentum semper.'
					},
					{
						image: './public/images/video-thumb-3.jpg',
						thumb: './public/images/video-select-3.jpg',
						title: 'Lorem ipsum dolor sit amet',
						ctaTitle: 'StoreRight<sup>&trade;</sup> System',
						cta: 'Play Video',
						desc: 'Nam ac vehicula nisl. Vestibulum auctor tellus vitae lectus dapibus, vel vehicula ante lobortis. Ut porttitor sagittis lectus a accumsan. Ut feugiat facilisis nunc, nec posuere nibh suscipit at. Etiam tempus purus sit amet sapien condimentum semper.'
					}
				]
			},
			productselector: {
				enabled: true,
				title: 'Choose Your Style',
				nav: {
					text: 'See<br/>All',
					link: 'http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110369/'
				},
				products: [
					{
						image: "./public/images/products/double-drawer.png",
                        title: "Double Drawer",
                        desc: "Get even more organized with our versatile Double Drawer refrigerator, designed with your family's needs in mind. This unique style offers 9 storage zones with our PerfectPlaces™ System, including our temperature-controlled drawer and small items bin.",
                        link: "http://www.whirlpool.ca",
                        id: "double-drawer",
                        ctaText: "Learn More"
                    },
					{
            			image: "./public/images/products/french-door.png",
                        title: "French Door",
                        desc: "Our French Door refrigerators offer the flexible organization and convenience to keep your fresh foods at eye level and easily store your frozen favourites. The premium look and optimal capacity make these refrigerators an ideal piece for your family's kitchen.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110368/",
                        id: "french-door",
                        ctaText: "Learn More"
                    },
            		{
						image: "./public/images/products/side-by-side.png",
                        title: "Side-by-Side",
                        desc: "Learn all the ways more door bin space makes it easy for your family to organize and access items big or small. This classic style offers a great balance of space for both fresh and frozen foods with the flexibility for different size options.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110369/",
                        id: "side-by-side",
                        ctaText: "Learn More"
                    },
            		{
						image: "./public/images/products/bottom-freezer.png",
                        title: "Bottom Freezer",
                        desc: "See how convenient it is to reach fresh foods and after-school snacks on the go. You have the option of pull-out drawer or swing-door style freezers, plus a variety of sizes to fit any space in your home.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110370/",
                        id: "bottom-freezer",
                        ctaText: "Learn More"
                    },
                    {
						image: "./public/images/products/top-freezer.png",
                        title: "Top Freezer",
                        desc: "There's always a place for fresh and frozen favourites inside this simple, classic style. Our Top Freezer refrigerator offers great quality and value and is available in smaller sizes for use as second one when you need the extra space.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Freezers-3/102280030+4294966865/",
                        id: "top-freezer",
                        ctaText: "Learn More"
                    },
            		{
						image: "./public/images/products/freezer.png",
                        title: "Freezers",
                        desc: "See all the extra storage for frozen foods, from pizza to popsicles. Our chest and upright styles ensure the perfect fit for any home.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Freezers-3/102280030/",
                        id: "freezers",
                        ctaText: "Learn More"
                    }
				]
			}
		}
	}

	get() {
		if (!(this.language in this.contents)) {
			this.logger.error('Language does not exist')
		}

		return this.contents[this.language];
	}

	getLanguage() {
		var url = window.location.href
		if (url.indexOf('/fr_CA') > -1) return 'fr'
		return 'en'
	}
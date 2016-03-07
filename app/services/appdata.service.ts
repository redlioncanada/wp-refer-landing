
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
			        	link: "http://findmy.whirlpool.ca",
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
						link: "http://www.whirlpool.ca/en_CA/Accessories-1/Accessories_Kitchen_Accessories_Refrigerator-3/102280119/",
						text: "",
						cta: ""
					},
					{
						title: "Water Filtration",
						image: "./public/images/more-features-2.jpg",
						link: "http://www.whirlpool.ca/en_CA/2_3_80/jump-pages_water-filters.content.html",
						text: "",
						cta: ""
					},
					{
						title: "Certified Care",
						image: "./public/images/more-features-3.jpg",
						link: "https://whirlpoolcertifiedcare.ca/en",
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
						id: '8uqalJESFos',
						thumb: './public/images/video-select-1.jpg',
						title: 'Perfect Places<sup>&trade;</sup>',
						ctaTitle: 'Perfect Places<sup>&trade;</sup>',
						cta: 'Play Video',
						desc: false
					},
					{
						id: 'xI986ew0VD0',
						thumb: './public/images/video-select-2.jpg',
						title: 'Resource Saver<sup>&trade;</sup> & EasyView<sup>&trade;</sup>',
						ctaTitle: 'Resource Saver<sup>&trade;</sup> & EasyView<sup>&trade;</sup>',
						cta: 'Play Video',
						desc: false,
					},
					{
						id: 'j-SeXWbpEaw',
						thumb: './public/images/video-select-3.jpg',
						title: 'StoreRight<sup>&trade;</sup> System',
						ctaTitle: 'StoreRight<sup>&trade;</sup> System',
						cta: 'Play Video',
						desc: false
					}
				]
			},
			productselector: {
				enabled: true,
				title: 'Choose Your Style',
				nav: {
					text: 'See<br/>All',
					link: 'http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Freezers-3/102280030/'
				},
				products: [
					{
						image: "./public/images/products/double-drawer.png",
                        title: "Double Drawer",
                        desc: "Get even more organized with our versatile Double Drawer refrigerator, designed with your family's needs in mind. This unique style offers 9 storage zones with our PerfectPlaces™ System, including our temperature-controlled drawer and small items bin.",
                        link: "http://www.whirlpool.ca/en_CA/kitchen-1/refrigeration-2/refrigerators-3/-[WRV986FDEM]-5552596/WRV986FDEM/",
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
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110371/",
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

		this.contents.fr = {
			masthead: {
				enabled: true,
				image: "./public/images/refer-landing-masthead-fr.jpg",
				title: ""
			},
			banner: {
				enabled: true,
				link: 'http://www.whirlpool.ca/fr_CA/everydaycare/',
				image: './public/images/banner_fr.jpg',
				ctaText: 'En savoir plus'
			},
			features: {
				enabled: true,
				features: [
					{
						image: "./public/images/refer-landing-shopping-cart.png",
						title: "Guide D'achat",
						desc: "Éléments à considérer lorsque vous magasinez",
						cta: "Cliquez ici",
						link: "http://whirlpool.ca/fr_CA/",
						type: "cart"
					},
					{
						image: "./public/images/refer-landing-star.png",
						title: "Classements et Évaluations",
						desc: "See what others are saying",
						cta: "Cliquez ici",
						link: "http://www.whirlpool.ca/fr_CA/2_3_90/jump-pages_best-products.content.html",
						type: "star"
					},
					{
						image: "./public/images/refer-landing-mag-glass.png",
						title: "Trouvez Votre Électroménager Whirlpool",
						desc: "Vous avez besoin d'aide pour trouver un réfrigérateur?",
						cta: "Cliquez ici",
						link: "http://trouvermon.whirlpool.ca",
						type: "magnifier"
					}
				]
			},
			morefeatures: {
				enabled: true,
				title: "Plus de fonctions fraîcheur",
				features: [
					{
						title: "Accessoires supplémentaires",
						image: "./public/images/more-features-1.jpg",
						link: "http://www.whirlpool.ca/fr_CA/Accessories-1/Accessories_Kitchen_Accessories_Refrigerator-3/102280119/",
						text: "",
						cta: ""
					},
					{
						title: "Filtres à eau",
						image: "./public/images/more-features-2.jpg",
						link: "http://www.whirlpool.ca/fr_CA/2_3_80/jump-pages_water-filters.content.html",
						text: "",
						cta: ""
					},
					{
						title: "Entretien autorisé",
						image: "./public/images/more-features-3.jpg",
						link: "https://whirlpoolcertifiedcare.ca/fr",
						text: "",
						cta: ""
					}
				]
			},
			videoplayer: {
				enabled: true,
				title: "Innovation à voir absolument",
				videos: [
					{
						image: './public/images/video-thumb-1.jpg',
						thumb: './public/images/video-select-1.jpg',
						title: 'Perfect Places<sup>&trade;</sup>',
						ctaTitle: 'Perfect Places<sup>&trade;</sup>',
						cta: 'Voir',
						desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum tempus leo, at sollicitudin ligula lobortis venenatis. Aliquam ut gravida lorem.(fr)'
					},
					{
						image: './public/images/video-thumb-2.jpg',
						thumb: './public/images/video-select-2.jpg',
						title: 'Resource Saver<sup>&trade;</sup> & EasyView<sup>&trade;</sup>',
						ctaTitle: 'Resource Saver<sup>&trade;</sup> & EasyView<sup>&trade;</sup>',
						cta: 'Voir',
						desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum tempus leo, at sollicitudin ligula lobortis venenatis. Aliquam ut gravida lorem.(fr)',
					},
					{
						image: './public/images/video-thumb-3.jpg',
						thumb: './public/images/video-select-3.jpg',
						title: 'System StoreRight<sup>&trade;</sup>',
						ctaTitle: 'System StoreRight<sup>&trade;</sup>',
						cta: 'Voir',
						desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum tempus leo, at sollicitudin ligula lobortis venenatis. Aliquam ut gravida lorem.(fr)'
					}
				]
			},
			productselector: {
				enabled: true,
				title: 'Choisissez votre style',
				nav: {
					text: 'Tout<br/>Voir',
					link: 'http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Freezers-3/102280030/'
				},
				products: [
					{
						image: "./public/images/products/double-drawer.png",
                        title: "Tiroir double",
                        desc: "Devenez le champion de l’organisation grâce à notre réfrigérateur polyvalent à double tiroir, conçu pour tous les besoins de votre famille. Son style unique offre 9 espaces de rangement, optimisés par notre système PerfectPlaces™, avec le tiroir à température contrôlée et le bac pour petits articles.",
                        link: "http://www.whirlpool.ca/fr_CA/kitchen-1/refrigeration-2/refrigerators-3/-%5BWRV986FDEM%5D-5552596/WRV986FDEM/",
                        id: "double-drawer",
                        ctaText: "En savoir plus"
                    },
					{
						image: "./public/images/products/french-door.png",
                        title: "Portes françaises",
                        desc: "Nos réfrigérateurs à portes françaises procurent un rangement polyvalent, maintiennent vos produits frais à hauteur des yeux et vous permettent de conserver facilement vos produits congelés favoris. Leur élégance et capacité optimale font de ces réfrigérateurs un élément idéal de votre cuisine familiale.",
                        link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110368/",
                        id: "french-door",
                        ctaText: "En savoir plus"
                    },
					{
						image: "./public/images/products/side-by-side.png",
                        title: "Côte à côte",
                        desc: "Découvrez l’avantage d’un espace supplémentaire dans les balconnets de porte qui facilitent le rangement et l'accès aux petits ou grands articles. Ce style classique offre un rangement parfaitement équilibré entre les aliments frais et surgelés, avec la possibilité de choisir différentes tailles.",
                        link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110369/",
                        id: "side-by-side",
                        ctaText: "En savoir plus"
                    },
					{
						image: "./public/images/products/bottom-freezer.png",
                        title: "Congélateur inférieur",
                        desc: "Bénéficiez d’un accès pratique aux aliments frais et aux collations sur le pouce ou après l'école. Vous avez le choix entre le congélateur-tiroir ou à porte, ainsi qu'une variété de tailles s'agençant à tout espace de votre maison.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023/",
                        id: "bottom-freezer",
                        ctaText: "En savoir plus"
                    },
                    {
						image: "./public/images/products/top-freezer.png",
                        title: "Congélateur supérieur",
                        desc: "Il y aura toujours une place pour vos aliments frais ou surgelés favoris dans ce réfrigérateur au style simple et classique à la fois. Notre réfrigérateur à congélateur supérieur offre un excellent rapport qualité/prix et est aussi disponible en tailles plus petites.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023/",
                        id: "top-freezer",
                        ctaText: "En savoir plus"
                    },
					{
						image: "./public/images/products/freezer.png",
                        title: "Congélateurs",
                        desc: "Découvrez tout l'espace supplémentaire pour les aliments congelés, tels que les pizzas ou les sucettes glacées. Nos modèles horizontaux ou verticaux assurent l'ajustement idéal pour tout espace.",
                        link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Freezers-3/102280030/",
                        id: "freezers",
                        ctaText: "En savoir plus"
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
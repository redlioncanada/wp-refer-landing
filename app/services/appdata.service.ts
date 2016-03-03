
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
				title: "Refrigerators"
			},
			banner: {
				enabled: true,
				link: 'http://www.kitchenaid.ca/en_CA/new/',
				image: './public/images/banner.jpg',
				ctaText: 'Learn More'
			},
			features: {
				enabled: true,
				features: [
			  //       {
			  //       	image: "./public/images/refer-landing-shopping-cart.png",
			  //           title: "Buying Guide",
			  //           desc: "What to look for when you are buying",
			  //           cta: "Click Here",
			  //           link: "http://kitchenaid.ca",
			  //           type: "cart"
					// },
			        {
			        	image: "./public/images/refer-landing-star.png",
			            title: "Ratings & Reviews",
			            desc: "See what others are saying",
			            cta: "Click Here",
			            link: "http://www.kitchenaid.ca/en_CA/2_2_89/global_best-products.content.html",
			            type: "star"
					},
					{
			        	image: "./public/images/refer-landing-mag-glass.png",
			        	title: "Find Your KitchenAid",
			        	desc: "Need help finding your refrigerator?",
			        	cta: "Click Here",
			        	link: "http://findmy.kitchenaid.ca/#/question/Appliance",
			        	type: "magnifier"
			    	}
				]
			},
			morefeatures: {
				enabled: true,
				title: "More Fresh Features",
				features: [
					{
						title: "Measured Water Fill",
						image: "./public/images/more-features-1.jpg",
						link: "http://kitchenaid.ca",
						text: "Displays and automatically dispenses water in ounces, cups, or liters.",
						cta: ""
					},
					{
						title: "Platinum Interior",
						image: "./public/images/more-features-2.jpg",
						link: "http://kitchenaid.ca",
						text: "Provides a premium look with silver glossy walls that complement the metallic accents found inside the refrigerator.",
						cta: ""
					},
					{
						title: "Three-Tier Freezer Drawer",
						image: "./public/images/more-features-3.jpg",
						link: "http://kitchenaid.ca",
						text: "Gives you easy access to frozen items with a three-level drawer, plus a divider in the lower basket to help you keep smaller items readily at hand.",
						cta: ""
					}
				]
			},
			videoplayer: {
				enabled: true,
				title: "Designed To Inspire",
				videos: [
					{
						id: '9IFIdkLo29Y',
						thumb: './public/images/video-select-1.jpg',
						title: 'Design: A revolutionary Mark On A Revolutionary New Line',
						ctaTitle: 'Design',
						cta: 'Play Video',
						desc: false
					},
					{
						id: 'fWbEHxpUEwM',
						thumb: './public/images/video-select-2.jpg',
						title: 'Food Care: KitchenAid<sup>&reg;</sup> Preserva<sup>&reg;</sup> Food Care System',
						ctaTitle: 'Food Care',
						cta: 'Play Video',
						desc: false
					},
					{
						id: 'RxnPMBOUWfk',
						thumb: './public/images/video-select-3.jpg',
						title: '5-Door: Revolutionary Five-Door Refrigerator',
						ctaTitle: '5-Door',
						cta: 'Play Video',
						desc: false
					}
				]
			},
			productselector: {
				enabled: true,
				title: 'Choose your style',
				nav: {
					text: 'See All',
					link: 'http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048/'
				},
				products: [
					{
            			image: "./public/images/products/5-door.png",
                        title: "5-door",
                        desc: "The revolutionary, first-ever 5-Door freestanding refrigerator is designed for optimal organization and food freshness. Learn more about our versatile soft-close drawers, designed to help keep your favourite foods visible and easy to reach.",
                        link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000817/",
                        id: "five-door",
                        ctaText: "Learn More"
                    },
            		{
            			image: "./public/images/products/built-in.png",
                        title: "Built-in",
                        desc: "When you picture your dream kitchen, you can bet our Built-in Refrigerator goes with it. Designed to fit your kitchen seamlessly, our panel ready options sold separately provide a sleek, premium look to complement your cabinets.",
                        link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000258/",
                        id: "built-in",
                        ctaText: "Learn More"
                    },
            		{
            			image: "./public/images/products/french-door.png",
                        title: "French Door",
                        desc: "Need to get organized? Our French Door Refrigerators provide excellent space and organizing options for your culinary needs. With features like the humidity-controlled crispers, pantry drawer, and tiered drawer freezers, French Door Refrigerators are a contemporary fit for any kitchen.",
                        link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000377/",
                        id: "french-door",
                        ctaText: "Learn More"
                    },
            		{
            			image: "./public/images/products/side-by-side.png",
                        title: "Side-By-Side",
                        desc: "The clean, timeless design of our Side-by-Side Refrigerators gives you eye-level access to both refrigerator and freezer, while keeping the ingredients you use most often fresh and at your fingertips.",
                        link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000379/",
                        id: "side-by-side",
                        ctaText: "Learn More"
                    },
                    {
            			image: "./public/images/products/bottom-freezer.png",
                        title: "Bottom Freezer",
                        desc: "Beautifully designed, inside and out. Our Bottom Freezer Refrigerators are made to give you easy access to your favourite foods. They also feature humidity-controlled crispers that create the perfect environment for keeping ingredients fresh.",
                        link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000376/",
                        id: "bottom-freezer",
                        ctaText: "Learn More"
                    },
            		{
            			image: "./public/images/products/under-counter.png",
                        title: "Under Counter",
                        desc: "Looking for a great addition to your kitchen? Our wide selection of Undercounter Refrigerators, Wine Cellars, and Ice Makers are a must have for entertaining, or providing another way to keep your beverages at the perfect temperature at all times.",
                        link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-2/undercounter-refrigerators-3/102310356/",
                        id: "under-counter",
                        ctaText: "Learn More"
                    }
				]
			}
		}

		this.contents.fr = {
			masthead: {
				enabled: true,
				image: "./public/images/refer-landing-masthead.jpg",
				title: "Réfrigérateurs"
			},
			banner: {
				enabled: true,
				link: 'http://www.kitchenaid.ca/fr_CA/new/',
				image: './public/images/banner_fr.jpg',
				ctaText: 'En savoir plus'
			},
			features: {
				enabled: true,
				features: [
					// {
			  //       	image: "./public/images/refer-landing-shopping-cart.png",
			  //           title: "Buying Guide",
			  //           desc: "Éléments à considérer lorsque vous magasinez",
			  //           cta: "Cliquez ici",
			  //           link: "http://kitchenaid.ca",
			  //           type: "cart"
					// },
					{
						image: "./public/images/refer-landing-star.png",
						title: "Évaluation et Commentaires",
						desc: "Découvrez ce que nos clients en disent",
						cta: "Cliquez ici",
						link: "http://www.kitchenaid.ca/fr_CA/2_2_89/global_best-products.content.html",
						type: "star"
					},
					{
						image: "./public/images/refer-landing-mag-glass.png",
						title: "Trouver mon KitchenAid",
						desc: "Besoin d’aide pour trouver votre réfrigérateur?",
						cta: "Cliquez ici",
						link: "http://trouvermon.kitchenaid.ca/#/question/Appliance",
						type: "magnifier"
					}
				]
			},
			morefeatures: {
				enabled: true,
				title: "Plus de fonctions fraîcheur",
				features: [
					{
						title: "Remplissage d'eau mesuré",
						text: "Affiche et distribue automatiquement l'eau en onces, tasses ou litres.",
						image: "./public/images/more-features-1.jpg",
						link: "http://kitchenaid.ca",
						cta: ""
					},
					{
						title: "Intérieur platine",
						text: "Offre un aspect haut de gamme, et les parois d'un brillant argenté complètent les accents métalliques que l'on retrouve à l'intérieur du réfrigérateur.",
						image: "./public/images/more-features-2.jpg",
						link: "http://kitchenaid.ca",
						cta: ""
					},
					{
						title: "Tiroir-congélateur à 3 niveaux avec diviseurs de rangement",
						text: "Permet d'accéder facilement aux articles congelés grâce aux trois niveaux; le diviseur dans le panier inférieur aide à garder les petits articles à portée de main.",
						image: "./public/images/more-features-3.jpg",
						link: "http://kitchenaid.ca",
						cta: ""
					}
				]
			},
			videoplayer: {
				enabled: true,
				title: "Conçu pour inspirer",
				videos: [
					{
						id: 'lQXv1imsjfA',
						thumb: './public/images/video-select-1.jpg',
						title: 'Conception: Un emblème révolutionnaire pour une nouvelle gamme révolutionnaire',
						ctaTitle: 'Conception',
						cta: 'Voir la video',
						desc: false
					},
					{
						image: './public/images/video-thumb-3.jpg',
						thumb: './public/images/video-select-2.jpg',
						title: 'Conservation des aliments: Réfrigérateur à 5 portes KitchenAid<sup>&reg;</sup> avec le système de conservation des aliments Préserva<sup>&reg;</sup>',
						ctaTitle: 'Conservation des aliments',
						cta: 'Voir',
						desc: 'Deux systèmes de refroidissement indépendants offrent un espace réfrigéré pour prolonger la fraîcheur des aliments; et un système de congélation séparé, entièrement consacré aux aliments surgelés. Le filtre à air FreshFlow™ contribue à minimiser les odeurs et les 2 conservateurs de fruits et légumes FreshFlow™ permettent de retarder la surmaturation des fruits et légumes.'
					},
					{
						id: 'ySD0Toxf8r0',
						thumb: './public/images/video-select-3.jpg',
						title: '5 portes: Réfrigérateur à 5 portes KitchenAid<sup>&reg;</sup> avec tiroirs à fermeture amortie',
						ctaTitle: '5 portes',
						cta: 'Voir la video',
						desc: false
					}
				]
			},
			productselector: {
				enabled: true,
				title: 'Choisissez votre style',
				nav: {
					text: 'Voir Tout',
					link: 'http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/refrigerators-3/102310048/'
				},
				products: [
					{
                        title: "5 portes",
                        desc: "Ce premier réfrigérateur révolutionnaire à 5 portes non encastré est conçu pour une organisation et une préservation des aliments optimales. Découvrez nos tiroirs à fermeture amortie polyvalents, conçus pour maintenir vos aliments favoris au niveau des yeux et à portée de main.",
                        link: "http://www.kitchenaid.ca/fr_CA/magasiner/-[KRMF706EBS]-5568100/KRMF706EBS/",
                        image: "./public/images/products/5-door.png",
                        id: "five-door",
                        ctaText: "En savoir plus"
                    },
					{
                        title: "Encastré",
                        desc: "Lorsque vous imaginez la cuisine de vos rêves, vous pouvez être assuré que notre réfrigérateur encastré s'y agencera parfaitement. Conçu pour s'assortir naturellement à votre cuisine, nos options pouvant accueillir un panneau de recouvrement (vendus séparément) offrent un style épuré et sophistiqué pour s’harmoniser à vos armoires.",
                        link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/refrigerators-3/102310048/",
                    	image: "./public/images/products/built-in.png",
						id: "built-in",
						ctaText: "En savoir plus"
                    },
					{
                        title: "Portes françaises",
                        desc: "Vous avez besoin de mieux vous organiser? Nos réfrigérateurs à portes françaises offrent un espace et des options de rangement idéals pour tous vos besoins culinaires. Les réfrigérateurs à portes françaises s'agencent idéalement à toute cuisine contemporaine, grâce à leurs bacs à légumes à humidité contrôlée, leurs tiroirs garde-manger et leurs tiroirs-congélateurs à trois niveaux.",
                        link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/refrigerators-3/102310048/",
                        image: "./public/images/products/french-door.png",
                        id: "french-door",
                        ctaText: "En savoir plus"
                    },
            		{
                        title: "Côte à côte",
                        desc: "La conception pure et intemporelle de nos modèles côte à côte vous permet de garder les ingrédients du réfrigérateur aussi bien que du congélateur au niveau des yeux tout en conservant les articles que vous utilisez le plus fréquemment au frais et à portée de main.",
                        link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/refrigerators-3/102310048+105001144/",
                        image: "./public/images/products/side-by-side.png",
                        id: "side-by-side",
                        ctaText: "En savoir plus"
                    },
                    {
                        title: "Congélateur inférieur",
                        desc: "D’une conception élégante à l'intérieur comme à l'extérieur, nos réfrigérateurs à congélateur inférieur sont conçus pour vous fournir un accès facile à tous vos articles favoris. Ils sont également dotés de bacs à légumes à humidité contrôlée, qui procurent un environnement idéal pour préserver la fraîcheur des produits.",
                        link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/refrigerators-3/102310048/",
                        image: "./public/images/products/bottom-freezer.png",
                        id: "bottom-freezer",
                        ctaText: "En savoir plus"
                    },
            		{
                        title: "Réfrigérateurs sous le comptoir et machines à glaçons",
                        desc: "Vous souhaitez rehausser le style de votre cuisine? Notre vaste choix de réfrigérateurs sous le comptoir, celliers et machines à glaçons sont très pratiques pour organiser des réceptions ou bien procurer une autre façon de conserver vos boissons à la température idéale, en tout temps.",
                        link: "http://www.kitchenaid.ca/fr_CA/shop/major-appliances-1/refrigerators-2/undercounter-refrigerators-3/102310356/",
                    	image: "./public/images/products/under-counter.png",
						id: "under-counter",
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
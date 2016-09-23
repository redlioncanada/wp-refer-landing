
import {Injectable} from 'angular2/core';
import {LoggerService} from './logger.service'

@Injectable()
export class AppDataService {
	private contents;
	public language: string;
	private init: boolean

	constructor(private logger: LoggerService) {
		this.language = this.getLanguage()
		this.contents = {}
		this.contents.en = {
			masthead: {
				enabled: true,
				image: "./public/images/refer-landing-masthead.jpg",
				alt: "test",
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
				title: 'Get Started Here',
				features: [
					{
						image: "./public/images/refer-landing-shopping-cart.png",
						title: "Buying Guide",
						alt: "test",
						desc: "What to look for when buying",
						cta: "Click Here",
						link: "http://blog.whirlpool.ca/whirlpool-refrigerator-buying-guide/",
						type: "cart"
					},
					{
						image: "./public/images/refer-landing-star.png",
						title: "Ratings and Reviews",
						alt: "test",
						desc: "See what others are saying",
						cta: "Click Here",
						link: "http://www.whirlpool.ca/en_CA/2_3_90/jump-pages_best-products.content.html",
						type: "star"
					},
					{
						image: "./public/images/refer-landing-mag-glass.png",
						title: "Find Your Whirlpool",
						alt: "test",
						desc: "Need help finding your refrigerator?",
						cta: "Click Here",
						link: "http://findmy.whirlpool.ca/#/?category=Fridges",
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
						alt: "test",
						text: "",
						cta: ""
					},
					{
						title: "Water Filtration",
						image: "./public/images/more-features-2.jpg",
						link: "http://www.whirlpool.ca/en_CA/2_3_80/jump-pages_water-filters.content.html",
						alt: "test",
						text: "",
						cta: ""
					},
					{
						title: "Certified Care",
						image: "./public/images/more-features-3.jpg",
						link: "https://whirlpoolcertifiedcare.ca/en",
						alt: "test",
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
						id: 'XuEmiHpvpMs',
						thumb: './public/images/video-select-2.jpg',
						title: 'Award-winning French Door Refrigerator',
						alt: "test",
						ctaTitle: 'Award-winning French Door Refrigerator',
						cta: 'Play Video',
						desc: 'This revolutionary, pantry-inspired layout is designed for the grocery items you shop for frequently, offering the most shelf-space in the industry. With up to 30% more storage space, this award-winning refrigerator can help you fit and find everything your family needs, right at your fingertips.',
					},
					{
						id: 'Oad1C6ES6-4?',
						thumb: './public/images/video-select-3.jpg',
						title: 'StoreRight<sup>&trade;</sup> and ReadySet<sup>&trade;</sup> Systems',
						alt: "test",
						ctaTitle: 'StoreRight<sup>&trade;</sup> and ReadySet<sup>&trade;</sup> Systems',
						cta: 'Play Video',
						desc: 'With advanced technology that senses and automatically adapts humidity levels, the StoreRight™ and ReadySet™ Systems help keep your fruits and vegetables fresher longer, and reduce freezer burn for your frozen foods. Plus, dual icemakers allow you to store more than twice the ice, so you always have plenty on hand.'
					},
					{
						id: '8uqalJESFos',
						thumb: './public/images/video-select-1.jpg',
						title: 'Perfect Places<sup>&trade;</sup>',
						alt: "test",
						ctaTitle: 'Perfect Places<sup>&trade;</sup>',
						cta: 'Play Video',
						desc: false
					},
				]
			},
			productselector: {
				enabled: true,
				title: 'Choose Your Style',
				nav: {
					text: 'See<br/>All',
					link: 'http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110368/#back'
				},
				products: [
					{
						image: "./public/images/products/double-drawer.png",
                        title: "Double Drawer",
                        alt: "test",
                        desc: "Get even more organized with our versatile Double Drawer refrigerator, designed with your family's needs in mind. This unique style offers 9 storage zones with our PerfectPlaces™ System, including our temperature-controlled drawer and small items bin.",
                        link: "http://www.whirlpool.ca/en_CA/kitchen-1/refrigeration-2/refrigerators-3/-[WRV986FDEM]-5552596/WRV986FDEM/",
                        id: "double-drawer",
                        ctaText: "Learn More"
                    },
					{
						image: "./public/images/products/french-door.png",
                        title: "French Door",
                        alt: "test",
                        desc: "Our French Door refrigerators offer the flexible organization and convenience to keep your fresh foods at eye level and easily store your frozen favourites. The premium look and optimal capacity make these refrigerators an ideal piece for your family's kitchen.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110368/",
                        id: "french-door",
                        ctaText: "Learn More"
                    },
					{
						image: "./public/images/products/side-by-side.png",
                        title: "Side-by-Side",
                        alt: "test",
                        desc: "Learn all the ways more door bin space makes it easy for your family to organize and access items big or small. This classic style offers a great balance of space for both fresh and frozen foods with the flexibility for different size options.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110369/",
                        id: "side-by-side",
                        ctaText: "Learn More"
                    },
					{
						image: "./public/images/products/bottom-freezer.png",
                        title: "Bottom Freezer",
                        alt: "test",
                        desc: "See how convenient it is to reach fresh foods and after-school snacks on the go. You have the option of pull-out drawer or swing-door style freezers, plus a variety of sizes to fit any space in your home.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110370/",
                        id: "bottom-freezer",
                        ctaText: "Learn More"
                    },
                    {
						image: "./public/images/products/top-freezer.png",
                        title: "Top Freezer",
                        alt: "test",
                        desc: "There's always a place for fresh and frozen favourites inside this simple, classic style. Our Top Freezer refrigerator offers great quality and value and is available in smaller sizes for use as second one when you need the extra space.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110371/",
                        id: "top-freezer",
                        ctaText: "Learn More"
                    },
					{
						image: "./public/images/products/freezer.png",
                        title: "Freezers",
                        alt: "test",
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
				alt: "test",
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
				title: 'Commencez ici',
				features: [

					{
						image: "./public/images/refer-landing-shopping-cart.png",
						title: "Guide D'achat",
						desc: "Éléments à considérer lorsque vous magasinez",
						alt: "test",
						cta: "Cliquez ici",
						link: "/other-assets/fr_CA/pdf/Refer-Buying-Guide-WP-FR.pdf",
						type: "cart"
					},
					{
						image: "./public/images/refer-landing-star.png",
						title: "Classements et Évaluations",
						desc: "Voyez ce que les autres clients en disent",
						alt: "test",
						cta: "Cliquez ici",
						link: "http://www.whirlpool.ca/fr_CA/2_3_90/jump-pages_best-products.content.html",
						type: "star"
					},
					{
						image: "./public/images/refer-landing-mag-glass.png",
						title: "Trouvez Votre Électroménager Whirlpool",
						desc: "Vous avez besoin d'aide pour trouver un réfrigérateur?",
						alt: "test",
						cta: "Cliquez ici",
						link: "http://trouvermon.whirlpool.ca/#/?category=Fridges",
						type: "magnifier"
					}
				]
			},
			morefeatures: {
				enabled: true,
				title: "Fonctions supplémentaires",
				features: [
					{
						title: "Accessoires supplémentaires",
						image: "./public/images/more-features-1.jpg",
						link: "http://www.whirlpool.ca/fr_CA/Accessories-1/Accessories_Kitchen_Accessories_Refrigerator-3/102280119/",
						alt: "test",
						text: "",
						cta: ""
					},
					{
						title: "Filtres à eau",
						image: "./public/images/more-features-2.jpg",
						link: "http://www.whirlpool.ca/fr_CA/2_3_80/jump-pages_water-filters.content.html",
						alt: "test",
						text: "",
						cta: ""
					},
					{
						title: "Entretien autorisé",
						image: "./public/images/more-features-3.jpg",
						link: "https://whirlpoolcertifiedcare.ca/fr",
						alt: "test",
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
						image: './public/images/video-thumb-2.jpg',
						thumb: './public/images/video-select-2.jpg',
						title: 'Réfrigérateur à portes françaises primé',
						ctaTitle: 'Réfrigérateur à portes françaises primé',
						alt: "test",
						cta: 'Voir',
						desc: 'Cette configuration révolutionnaire inspirée d’un garde-manger est conçue pour vous permettre de ranger facilement les articles que vous achetez fréquemment, et offre le plus grand espace sur tablettes de l’industrie. Avec presque 30 % d’espace de rangement supplémentaire, ce réfrigérateur primé vous permet de loger, retrouver facilement et garder à portée de main tous les articles dont votre famille a besoin.',
					},
					{
						image: './public/images/video-thumb-3.jpg',
						thumb: './public/images/video-select-3.jpg',
						title: 'Systèmes StoreRight<sup>&trade;</sup> et ReadySet<sup>&trade;</sup>',
						ctaTitle: 'Systèmes StoreRight<sup>&trade;</sup> et ReadySet<sup>&trade;</sup>',
						alt: "test",
						cta: 'Voir',
						desc: 'Grâce à une technologie perfectionnée qui détecte les niveaux d’humidité puis les adapte automatiquement, les systèmes StoreRight™ et ReadySet™ contribuent à prolonger la fraîcheur de vos fruits et légumes et à réduire les brûlures de congélation pour vos aliments surgelés. Par ailleurs, les deux machines à glaçons vous permettent d’entreposer deux fois plus de glace pour en avoir en permanence à portée de la main.  '
					},
					{
						image: './public/images/video-thumb-1.jpg',
						thumb: './public/images/video-select-1.jpg',
						title: 'Système de rangement Perfect Places<sup>&trade;</sup>',
						ctaTitle: 'Système de rangement Perfect Places<sup>&trade;</sup>',
						alt: "test",
						cta: 'Voir',
						desc: 'La conception Whirlpool à double tiroir  offre cinq zones de rangement uniques pour mieux organiser vos articles. Il s\'agit de notre réfrigérateur le plus flexible à ce jour.'
					},
				]
			},
			productselector: {
				enabled: true,
				title: 'Choisissez votre style',
				nav: {
					text: 'Tout<br/>Voir',
					link: 'http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110368/#back'
				},
				products: [
					{
						image: "./public/images/products/double-drawer.png",
                        title: "Tiroir double",
                        desc: "Devenez le champion de l’organisation grâce à notre réfrigérateur polyvalent à double tiroir, conçu pour tous les besoins de votre famille. Son style unique offre 9 espaces de rangement, optimisés par notre système PerfectPlaces™, avec le tiroir à température contrôlée et le bac pour petits articles.",
                        link: "http://www.whirlpool.ca/fr_CA/kitchen-1/refrigeration-2/refrigerators-3/-%5BWRV986FDEM%5D-5552596/WRV986FDEM/",
                        alt: "test",
                        id: "double-drawer",
                        ctaText: "En savoir plus"
                    },
					{
						image: "./public/images/products/french-door.png",
                        title: "Portes françaises",
                        desc: "Nos réfrigérateurs à portes françaises procurent un rangement polyvalent, maintiennent vos produits frais à hauteur des yeux et vous permettent de conserver facilement vos produits congelés favoris. Leur élégance et capacité optimale font de ces réfrigérateurs un élément idéal de votre cuisine familiale.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110368/#back",
                        alt: "test",
                        id: "french-door",
                        ctaText: "En savoir plus"
                    },
					{
						image: "./public/images/products/side-by-side.png",
                        title: "Côte à côte",
                        desc: "Découvrez l’avantage d’un espace supplémentaire dans les balconnets de porte qui facilitent le rangement et l'accès aux petits ou grands articles. Ce style classique offre un rangement parfaitement équilibré entre les aliments frais et surgelés, avec la possibilité de choisir différentes tailles.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110368/#back",
                        alt: "test",
                        id: "side-by-side",
                        ctaText: "En savoir plus"
                    },
					{
						image: "./public/images/products/bottom-freezer.png",
                        title: "Congélateur inférieur",
                        desc: "Bénéficiez d’un accès pratique aux aliments frais et aux collations sur le pouce ou après l'école. Vous avez le choix entre le congélateur-tiroir ou à porte, ainsi qu'une variété de tailles s'agençant à tout espace de votre maison.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023/",
                        alt: "test",
                        id: "bottom-freezer",
                        ctaText: "En savoir plus"
                    },
                    {
						image: "./public/images/products/top-freezer.png",
                        title: "Congélateur supérieur",
                        desc: "Il y aura toujours une place pour vos aliments frais ou surgelés favoris dans ce réfrigérateur au style simple et classique à la fois. Notre réfrigérateur à congélateur supérieur offre un excellent rapport qualité/prix et est aussi disponible en tailles plus petites.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023/",
                        alt: "test",
                        id: "top-freezer",
                        ctaText: "En savoir plus"
                    },
					{
						image: "./public/images/products/freezer.png",
                        title: "Congélateurs",
                        desc: "Découvrez tout l'espace supplémentaire pour les aliments congelés, tels que les pizzas ou les suçons glacés. Nos modèles horizontaux ou verticaux assurent l'ajustement idéal pour tout espace.",
                        link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Freezers-3/102280030/",
                        alt: "test",
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
}
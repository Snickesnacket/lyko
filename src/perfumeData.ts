import perfumeImage from "./assets/parfume.png";

export interface Perfume {
	id: number;
	title: string;
	brand: string;
	img: string;
	text: string;
	price: number;
	currency: string;
	quantity: string;
}

export const perfumeData: Perfume[] = [
	{
		id: 1,
		title: 'FLOWER BOMB',
		brand: 'Stella McCartney',
		img: perfumeImage,
		text: 'Lip Drip Lip Gloss Berry Me',
		price: 450,
		currency: 'kr',
		quantity: '50 ml',
	},
	{
		id: 2,
		title: 'ICE-SPICE',
		brand: 'Armani',
		img: perfumeImage,
		text: 'Lip Drip Lip Gloss Berry Me',
		price: 450,
		currency: 'kr',
		quantity: '50 ml',
	},
	{
		id: 3,
		title: 'GIA',
		brand: 'Stella McCartney',
		img: perfumeImage,
		text: 'Lip Drip Lip Gloss Berry Me',
		price: 450,
		currency: 'kr',
		quantity: '50 ml',
	},
	{
		id: 4,
		title: 'AQUA DIO',
		brand: 'Armani',
		img: perfumeImage,
		text: 'Lip Drip Lip Gloss Berry Me',
		price: 450,
		currency: 'kr',
		quantity: '50 ml',
	}
]

export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	createdAt: string;
	updatedAt: string;
	deletedAt: string | null;
	properties_Values: string;
	images: string | null;
	properties: Property[];
}

export interface Property {
	propertyId: string;
	propertyName: string;
	propertyValueId: string;
	propertyValueName: string;
}

export interface ApiResponse {
	status: string;
	data: Product[];
	pageNum: number;
	last_page: number;
}



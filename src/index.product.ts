export interface Product {
	Id: number;
	Name: string;
	Description: string;
	Price: number;
	CreatedAt: string;
	UpdatedAt: string;
	deletedAt: string | null;
	Properties_Values: string;
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
}
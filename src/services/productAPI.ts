import {ApiResponse, Product} from "../index.product.ts";

const BASE_URL = import.meta.env.VITE_PUBLIC_API_URL;

export const getProducts = async (page: number, limit: number): Promise<Product[]> => {
		const response = await fetch(`${BASE_URL}/products?page=${page}&limit=${limit}`);
	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);
	}
		const responseData: ApiResponse = await response.json()
		const {data } = responseData
		return data

};

export const getProduct = async ( id: number): Promise<Product[]> => {
		const response = await fetch(`${BASE_URL}/products/${id}`);

		if (!response.ok) {
			throw new Error(`${response.status} ${response.statusText}`);
		}

		const responseData: ApiResponse = await response.json()
		return responseData.data
};
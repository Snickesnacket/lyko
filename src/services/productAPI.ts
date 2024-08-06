import {ApiResponse, Filter} from "../index.product.ts";
const BASE_URL = import.meta.env.VITE_PUBLIC_API_URL;

export const getProducts = async (page: number, limit: number, filter: Filter[] | undefined): Promise<ApiResponse> => {
		const response = await fetch(`${BASE_URL}/products?page=${page}&limit=${limit}&filter[price]=${filter}&filter[country]=${filter}&filter[flavor]=${filter}&filter[consistency]=${filter}`);
		if (!response.ok) {
			throw new Error(`${response.status} ${response.statusText}`);
		}

		return await response.json();

};
export const getProduct = async ( id: number): Promise<ApiResponse> => {
		const response = await fetch(`${BASE_URL}/products/${id}`);

		if (!response.ok) {
			throw new Error(`${response.status} ${response.statusText}`);
		}

		if(response.status != 200) {
			throw new Error(`${response.status} ${response.statusText}`);
		}

		return response.json()
};
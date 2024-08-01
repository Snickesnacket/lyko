import {ApiResponse, Product} from "../index.product.ts";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const BASE_URL = import.meta.env.VITE_PUBLIC_API_URL;

export const getProducts = async (): Promise<Product[]> => {
	try {
		const response = await fetch(`${BASE_URL}/products`);
		if (response.status !== 200) {
			throw error;
		}

		const responseData: ApiResponse = await response.json()
		const {data } = responseData
		return data

	} catch (error) {
		return []
	}

};

export const getProduct = async ( id: number): Promise<Product[]> => {
	try{

		const response = await fetch(`${BASE_URL}/products/${id}`);

		if (!response.ok) {
			throw new Error(`${response.status} ${response.statusText}`);
		}

		const responseData: ApiResponse = await response.json()

		return responseData.data
	} catch (error) {
		return []
	}

};
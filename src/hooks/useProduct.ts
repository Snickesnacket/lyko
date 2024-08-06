import {useQuery} from '@tanstack/react-query';
import {getProduct, getProducts} from '../services/productAPI.ts';
import {ApiResponse} from "../index.product.ts";
export const useProducts = (page: number, limit: number) => {
	return useQuery<ApiResponse, Error>({
		queryKey: ['products', page, limit],
		queryFn: () => getProducts(page, limit),
		enabled: !!page && !!limit
	});
}

export const useProduct = (productId: number) => {
	const id = Number(productId);

	return useQuery<ApiResponse, Error>( {
		queryKey: ['product', productId],
		queryFn: async () => await getProduct(id),
		enabled: !!id,
		retry: false
	});
};
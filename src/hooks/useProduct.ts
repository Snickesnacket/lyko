import {useQuery} from '@tanstack/react-query';
import {getProduct, getProducts} from '../services/productAPI.ts';
import {ApiResponse, Filter} from "../index.product.ts";
export const useProducts = (page: number, limit: number, filter: Filter[] | undefined ) => {
	return useQuery<ApiResponse, Error>({
		queryKey: ['products', page, limit],
		queryFn: () => getProducts(page, limit, filter),
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
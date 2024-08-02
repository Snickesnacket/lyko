import {useQuery} from '@tanstack/react-query';
import {getProduct, getProducts} from '../services/productAPI.ts';
import {Product} from "../index.product.ts";
export const useProducts = (page: number, limit: number) => {

	const {data: ResponseData} = useQuery<Product [] | undefined, Error>({
		queryKey: ['products', page, limit],
		queryFn: () => getProducts(page, limit),
		enabled: !!page,
	});

	return ResponseData || [];
}

export const useProduct = (productId: number) => {
	const id = Number(productId);

	const { data: ResponseData } =  useQuery<Product [], Error>( {
		queryKey: ['product', productId],
		queryFn: () => getProduct(id),
		enabled: !!id,
	});
	return ResponseData || [];
};
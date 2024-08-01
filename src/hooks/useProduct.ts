import {useQuery} from '@tanstack/react-query';
import {getProduct, getProducts} from '../services/productAPI.ts';
import {Product} from "../index.product.ts";

export const useProducts = () => {

		const {data: ResponseData} = useQuery<Product [] | undefined, Error>({
			queryKey: ['products'],
			queryFn: getProducts
		});

		if(!ResponseData) {
			return []
		}
		return ResponseData as Product[]
};

export const useProduct = (productId: number) => {
	const id = Number(productId);

	const { data: ResponseData } =  useQuery<Product [], Error>( {
		queryKey: ['product', productId],
		queryFn: () => getProduct(id),
		enabled: !!id,
	});
	if(!ResponseData) {
		return []
	}
	return ResponseData as Product[]

};
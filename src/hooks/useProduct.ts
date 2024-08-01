import {useQuery} from '@tanstack/react-query';
import {getProduct, getProducts} from '../services/productAPI.ts';
import {Product} from "../index.product.ts";

export const useProducts = () => {

		const {data: tmp} = useQuery<Product [] | undefined, Error>({
			queryKey: ['products'],
			queryFn: getProducts
		});

		if(!tmp) {
			return []
		}
		return tmp as Product[]
};

export const useProduct = (productId: number) => {
	const id = Number(productId);

	const { data: tmp } =  useQuery<Product [], Error>( {
		queryKey: ['product', productId],
		queryFn: () => getProduct(id),
		enabled: !!id,
	});
	if(!tmp) {
		return []
	}
	return tmp as Product[]

};
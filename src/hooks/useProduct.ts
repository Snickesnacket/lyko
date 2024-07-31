import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../services/productAPI.ts';
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



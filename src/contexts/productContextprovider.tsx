// ProductProvider.tsx
import React, { useState } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getProducts } from '../services/productAPI';
import { ApiResponse } from "../index.product.ts";
import { ProductContext } from './productContext';

const queryClient = new QueryClient();

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [queryParams, setQueryParams] = useState({ page: 1, limit: 10 });

	const { data: products, isStale, status, isSuccess, isLoading, isError, error, refetch } = useQuery<ApiResponse, Error>({
		queryKey: ['products', queryParams.page, queryParams.limit],
		queryFn: () => getProducts(queryParams.page, queryParams.limit),
		enabled: false, // We'll manually trigger the query
	});

	const fetchProducts = (page: number, limit: number) => {
		setQueryParams({ page, limit });
		refetch();
	};

	const value = {
		products,
		isLoading,
		isError,
		error,
		isStale,
		isSuccess,
		status,
		fetchProducts,
	};

	return (
		<QueryClientProvider client={queryClient}>
			<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
		</QueryClientProvider>
	);
};
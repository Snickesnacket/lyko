// productContext.ts
import { createContext, useContext } from 'react';
import { ApiResponse } from "../index.product.ts";

interface ProductContextType {
	products: ApiResponse | undefined;
	isLoading: boolean;
	isError: boolean;
	error: Error | null;
	isStale: boolean;
	isSuccess: boolean;
	status: "error" | "success" | "pending";
	fetchProducts: (page: number, limit: number) => void;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = () => {
	const context = useContext(ProductContext);
	if (context === undefined) {
		throw new Error('useProductContext must be used within a ProductProvider');
	}
	return context;
};
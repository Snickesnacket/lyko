import { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import "./App.css";

const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Loading = () => <div>Loading...</div>;

const App = () => {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/products/:id" element={<ProductPage />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</Suspense>
			<ReactQueryDevtools />
		</>
	);
};

export default App;
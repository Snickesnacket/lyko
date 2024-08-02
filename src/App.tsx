import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";

const App = () => {
	return (
		<Routes>
			<Route path="/:limit" element={<ProductsPage />} />
			<Route path="/products/:id" element={<ProductPage />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default App;

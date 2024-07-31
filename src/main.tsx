import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(

	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
		<BrowserRouter>
			<div className="bg-white min-h-screen pt-20">
				<Navbar />
				<App />
				<Footer />
			</div>
		</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>
);

import hero from "../assets/hero.webp";
import Sidebar from "../components/Sidebar.tsx";
import Module from "../components/Module.tsx";
import {useSearchParams} from "react-router-dom";
import Pagination from "../components/Pagination.tsx";
import Spinner from "../utils/Spinner.tsx";
import {useEffect} from "react";
import {useProductContext} from "../contexts/productContext.ts";





const ProductsPage = () => {
	const { products, isStale, isSuccess, isLoading, status,  isError, fetchProducts } = useProductContext();
	const [searchParams, setSearchParams] = useSearchParams({ page:'1', limit: '10'});
	const page = Number(searchParams.get('page') || '1');
	const limit = Number(searchParams.get('limit') || '10');

	useEffect(() => {
		fetchProducts(page, limit);
	}, [page, limit ]);


		if (isLoading) return <Spinner />;
		if (isError) return <div>Error loading products</div>;
	return (
		<>
			<pre>
				isError: {isError ? "true" : "false"}<br/>
				isFetching: {isLoading ? "true" : "false"}<br/>
				isLoading: {isLoading ? "true" : "false"}<br/>
				isStale: {isStale? "true" : "false"}<br/>
				isSuccess: {isSuccess? "true" : "false"}<br/>
				status: {status}
			</pre>

			{isLoading && <Spinner />}

			{ isSuccess && 	<div className=" bg-modulebackground">
				<div className="max-w-6xl m-auto">
					<header className=" w-full">
						<img className="w-full object-contain" src={hero} alt="Vite logo"/>
					</header>
					<div className="bg-white p-10">
						<div className=" flex flex-col items-center text-center space-y-5">
							<div className="space-x-20 lg:mt-20 mb-5">
								<span className=" text-base font-bold">DAM</span>
								<span className="font-bold">HERR</span>
							</div>
							<h2 className="font-bold text-3xl">Parfym</h2>
							<div className="m-10 space-y-5 mb-5">
								<span>Doftguide</span>
								<p className="text-center max-w-[650px]">
									Det finns inget så härligt som att förälska sig i en ny doft,
									och i ett utbud så stort som vårt är det inte svårt att hitta
									nya älsklingar! Bland alla babes på denna sida finns magiska
									märken så som Ariana Grande, Versace, Clean, Dolce &amp;
									Gabbana, Hugo Boss, Escada med MÅNGA fler. Lycka till!
								</p>
							</div>
						</div>
						{products && products.data?.length && (
							<>
								<div
									className="p-2 lg:space-x-10 space-x-0 lg:inline-flex flex-col w-fit mr-auto my-10 lg:flex-row ">
									<div className="lg:flex-col">

										<div className=" font-bold lg:mr-auto pl-0.5 h-20 py-2 lg:text-left text-center">{`Produkter ${products.data.length}`}</div>

										<Sidebar />
									</div>
									<Module/>
								</div>
								<Pagination
									page={page}
									totalPages={products.pageNum}
									hasPreviousPage={page > 1 }
									hasNextPage={page < products.last_page}
									onPreviousPage={() => { setSearchParams({page: String(page -1), limit: '10'})}}
									onNextPage={() => { setSearchParams({page: String(page  + 1), limit: '10'})}}
								/>
							</>
						)}
					</div>
				</div>
			</div>
			}
		</>
	);
};

export default ProductsPage
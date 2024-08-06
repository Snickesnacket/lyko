import hero from "../assets/hero.webp";
import Sidebar from "../components/Sidebar.tsx";
import Module from "../components/Module.tsx";
import { useProducts } from '../hooks/useProduct.ts'
import {useSearchParams} from "react-router-dom";
import Pagination from "../components/Pagination.tsx";

interface IProps {
	heading?: string
	children: React.ReactNode
}

const ProductsPage: React.FC<IProps> = ({ heading = 'Warning', children}) => {
	const [searchParams, setSearchParams] = useSearchParams({ page:'1', limit: '10'});
	const page = Number(searchParams.get('page') || '1');
	const limit = Number(searchParams.get('limit') || '10');

	const {data: Products, isError, error, isLoading} = useProducts(page, limit);

	return (
		<>
		{isError && (
			<>
				<h1>{heading}</h1>
				{children}
				{error}
			</>
		)}

		{isLoading && (
			<p>Loading books...</p>
		)}

		<div className=" bg-modulebackground">
			<div className="max-w-6xl m-auto">
				<header className=" w-full">
					<img className="w-full object-contain" src={hero} alt="Vite logo" />
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
					{Products && Products.data?.length && (
						<>
					<div className="p-2 lg:space-x-10 space-x-0 lg:inline-flex flex-col w-fit mr-auto my-10 lg:flex-row ">
						<div className="lg:flex-col">

								<div className=" font-bold lg:mr-auto pl-0.5 h-20 py-2 lg:text-left text-center">{`Produkter ${Products.data.length}`}</div>

							<Sidebar products={Products.data} />
						</div>
						<Module products={Products.data}/>
					</div>
						<Pagination
							page={page}
							totalPages={Products.pageNum}
							hasPreviousPage={page > 1 }
							hasNextPage={page < Products.last_page}
							onPreviousPage={() => { setSearchParams({page: String(page -1), limit: '10'})}}
							onNextPage={() => { setSearchParams({page: String(page  + 1), limit: '10'})}}
						/>
						</>
				)}
				</div>
			</div>
		</div>
		</>
	);
};

export default ProductsPage
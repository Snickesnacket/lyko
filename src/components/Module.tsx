
import MostSold from "./MostSold.tsx";
import {NavLink} from "react-router-dom";
import {Product} from "../index.product.ts";
import {useProducts} from "../hooks/useProduct.ts";

function Module () {
	const products  = useProducts();

	function truncateDescription (description: string, count: number) {
		return description.length > count ? `${description.substring(0, count)}...` : description;
	}

	return (
		<div className="flex flex-col">
			<div className="hidden h-20 lg:inline-flex w-fit ml-auto">
				<MostSold />
			</div>
			<div className=" grid grid-cols-2 md:grid-cols-3 w-full gap-10">

				{products && products.map((product: Product) => (
					<div key={product.Id}>
					<div className="space-x-3">
						<NavLink key={product.Id} to={`/products/${product.Id}`}>
							<div className="bg-modulebackground w-full p-5">
								<img className="py-2 object-contain  h-full m-auto" src={`http://localhost:3000/img/${product.images ? product.images.split(',')[0] : ''}`} alt=" product image"/>
							</div>
							<div>
								<h3 className="font-bold pt-4">
									{product.Name}
								</h3>
								<section className="font-thin mt-7">
									{truncateDescription(product.Description, 188)}
								</section>
								<span className="font-bold block">
									{product.Price}
								</span>
							</div>
						</NavLink>
					</div>
						<button
							className="border-2 hover:bg-gray-300 rounded-md border-gray-800 mt-5 py-2 px-6">
							KÖP
						</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default Module


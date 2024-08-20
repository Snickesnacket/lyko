
import MostSold from "./MostSold.tsx";
import {NavLink} from "react-router-dom";
import {Product} from "../index.product.ts";
import {useProductContext} from "../contexts/productContext.ts";




const Module= () => {
	const { products} = useProductContext();
	function truncateDescription (description: string, count: number) {
		return description.length > count ? `${description.substring(0, count)}...` : description;
	}

	return (
		<div className="flex flex-col">
			<div className="hidden h-20 lg:inline-flex w-fit ml-auto">
				<MostSold/>
			</div>
			<div className=" grid grid-cols-1 md:grid-cols-3 w-full gap-10">

				{products && products.data.map((product: Product) => (
					<div key={product.id}>
						<div className="space-x-3">
							<NavLink key={product.id} to={`/products/${product.id}`}>
								<div className="bg-modulebackground w-full p-5">
									<img className="py-2 object-contain  h-full m-auto" src={`http://localhost:3000/img/${product.images ? product.images.split(',')[0] : ''}`} alt=" product image"/>
								</div>
								<div>
									<h3 className="font-bold pt-4">
										{product.name}
									</h3>
									<section className="font-thin mt-7">
										{truncateDescription(product.description, 60)}
									</section>
									<span className="font-bold block">
										{product.price}
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


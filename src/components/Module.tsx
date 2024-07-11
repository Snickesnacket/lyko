import {Perfume, perfumeData} from "../perfumeData.ts";
import MostSold from "./MostSold.tsx";

function Module () {
	return (
		<div className="flex flex-col">
			<div className="hidden h-20 lg:inline-flex w-fit ml-auto">
				<MostSold />
			</div>
			<div className=" grid grid-cols-2 md:grid-cols-3 w-full gap-10 justify-items-center">
				{perfumeData && perfumeData.map((product: Perfume) => (
					<div className="space-x-3" key={product.id}>
						<div className="bg-modulebackground w-full p-5">
							<img className="py-2 object-contain  h-full m-auto" src={product.img} alt=" product image"/>
						</div>
						<div>
							<h3 className="font-bold pt-4">
								{product.title}
							</h3>
							<section className="font-thin mt-7">
								{product.text}
							</section>
							<span className="font-bold block">
								{product.price} {product.currency}
							</span>
							<button
								className="border-2 hover:bg-gray-300 rounded-md border-gray-800 mt-5 py-2 px-6">
								KÖP
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Module
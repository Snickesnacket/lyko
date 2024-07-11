import {Perfume, perfumeData} from "../perfumeData.ts";

function Sidebar ()  {
	return (
		<aside className="hidden space-y-20 lg:block">
			<div className="border-[0.5px] border-gray-300 h-fit space-y-5 p-3 ">
				<div className="flex justify-between items-center">
					<h3>VARUMÄRKE</h3>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
						<path d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
					</svg>
				</div>
				<input placeholder="SÖK" className="border-[0.5px] border-gray-300 p-2"/>

				{perfumeData && perfumeData.map((product: Perfume) => (
					<div key={product.id} className="flex items-center mb-10 space-x-3 ">
						<input type="checkbox" id={`brand-${product.id}`} className="form-checkbox"/>
						<label htmlFor={`brand-${product.id}`} className="text-sm">{product.brand}</label>
					</div>
				))}
				<button className="my-3 border-b-2 border-gray-300 inline-block">Visa alla</button>
			</div>
		</aside>
	)
}

export default Sidebar
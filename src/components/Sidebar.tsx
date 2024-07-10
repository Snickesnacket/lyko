import {Perfume, perfumeData} from "../perfumeData.ts";

function Sidebar ()  {
	return (
		<aside className="px-5 items-center flex-col inline-flex">
			<p className="font-bold m-6">
				{`${perfumeData.length} Produkter`}
			</p>

			<div className="border-[0.5px] border-gray-300 h-fit space-y-5 p-3">
				<div className="flex justify-between items-center">
					<h3>VARUMÄRKE</h3>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
						<path d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
					</svg>
				</div>
				<input placeholder="SÖK" className="border-[0.5px] border-gray-300 p-2"/>

				{perfumeData && perfumeData.map((product: Perfume) => (
					<div key={product.id} className="flex items-center space-x-3">
						<input type="checkbox" id={`brand-${product.id}`} className="form-checkbox" />
						<label htmlFor={`brand-${product.id}`} className="text-sm">{product.brand}</label>
					</div>
				))}
		</div>
</aside>

)
}

export default Sidebar
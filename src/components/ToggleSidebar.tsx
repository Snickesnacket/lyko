
import { useState} from "react";
import {Product} from "../index.product.ts";

import {useProducts} from "../hooks/useProduct.ts";

function ToggleSidebar () {
	const products  = useProducts();

	const [toggleShow, setToggleShow] = useState(false)
	return (
		<div>
		<div className="space-y-5 border-[0.5px] border-gray-300 m-3">
			<button className=" flex flex-row pt-2 mx-2"
					onClick={() => setToggleShow(!toggleShow)}>VARUMÄRKE
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black"
					className="size-6 ml-4">
					<path d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
				</svg>
			</button>
		</div>
	<div className={` ${toggleShow ? '' : 'hidden'} h-full space-y-3 m-2 pb-2`}>
		<input placeholder="SÖK" className="border-[0.5px] border-gray-300  px-2 py-1 "/>
		{products && products.map((product: Product) => (
			<div key={product.Id} className="flex items-center space-x-3 px-2">
				<input type="checkbox" id={`brand-${product.Id}`} className="form-checkbox"/>
				<label htmlFor={`brand-${product.Id}`} className="text-sm">{product.Name}</label>
			</div>
		))}
		<button className=" border-b-2 border-gray-300 inline-block">Visa alla</button>
	</div>
</div>
)
}
export default ToggleSidebar
import {useState} from "react";
import {Perfume, perfumeData} from "../perfumeData.ts";

function Footer () {
	const [visibility, setVisibility] = useState(false)
	const [toggleShow, setToggleShow] = useState(false)
	return (
		<>
			<aside className={` ${visibility ? '' : 'hidden'} h-full`}>
				<div className={`flex flex-col fixed top-20 h-fit  items-start bg-white shadow-lg space-x-3 pt-7 lg:hidden border-2 border-gray-300 rounded-sm
					 left-0 px-5 pb-5 gap-5`}>
					<button className=" flex flex-row py-2 px-3 border-2 border-gray-300 rounded-sm"
							onClick={() => setToggleShow(!toggleShow)}>VARUMÄRKE
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" className="size-6 ml-4">
							<path d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
						</svg>
					</button>
					<div className={`${toggleShow ? '' : 'hidden'}`}>
						{perfumeData && perfumeData.map((product: Perfume) => (
							<div key={product.id} className={`flex items-center space-x-3`}>
								<input type="checkbox" id={`brand-${product.id}`} className="form-checkbox"/>
								<label htmlFor={`brand-${product.id}`} className="text-sm">{product.brand}</label>
							</div>
						))}
						<button className="my-3 border-b-2 border-gray-300 inline-block">Visa alla</button>
					</div>
				</div>
			</aside>

			<footer
				className=" bg-gray-950 fixed bottom-0 left-0 w-full py-5 px-10 h-12 flex lg:hidden items-center justify-between">
				<div>
					<button onClick={() => setVisibility(!visibility)}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="size-6 h-10 w-10">
							<path
								d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/>
						</svg>
					</button>
				</div>

				<span className="text-white">MEST SÅLDA</span>
				{/*<div className="px-5 items-center flex-col inline-flex">
					<p className="font-bold text-white m-6">
						{`${perfumeData.length} Produkter`}
					</p>
				</div>*/}
			</footer>
		</>
	)
}

export default Footer
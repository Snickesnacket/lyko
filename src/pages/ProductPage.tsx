
import {useNavigate, useParams} from 'react-router-dom'
import {useProduct} from "../hooks/useProduct.ts";
import {Product} from "../index.product.ts";


const ProductPage = () => {
	const { id } = useParams()
	const productId = Number(id)
	const navigate = useNavigate()
	const products: Product [] = useProduct(productId)
	if(!products || products.length === 0 || products[0].Id != productId) {
		navigate('*')
	}

	return (
		<div className=" bg-modulebackground">
			<div className="max-w-6xl m-auto bg-white p-10">
				{ products && products.map( product => (
					<div key={product.Id} className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20 md:items-start  ">
						<div className="w-full p-5 border-greybackground border-[1px]">
							<img className="py-2 object-contain  h-full m-auto" src={`http://localhost:3000/img/${product.images ? product.images.split(',')[0] : ''}`} alt=" product image"/>
						</div>
						<div className="flex flex-col  ">
							<h3 className="font-bold text-4xl pt-4">
								{product.Name}
							</h3>
							<div className=" flex flex-row gap-3 mt-2">
								{product && product.properties.map((product, index ) => (
									<p key={index} >{product.propertyValueName}</p>
								))}
							</div>
							<section className="font-thin mt-7">
								{product.Description}
							</section>
							<span className="font-bold text-2xl mt-14 block">
								{product.Price} kr
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductPage;
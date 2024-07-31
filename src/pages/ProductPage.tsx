
import { useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import {getProduct} from "../services/productAPI.ts";
import {Product} from "../index.product.ts";


const ProductPage = () => {
	const [data, setData] = useState<Product | null>(null)
	const { id } = useParams()
	const perfumeId = Number(id)

	const getData = async () => {
		const productData = await getProduct(perfumeId)
		setData(productData)
	}

	useEffect(() => {
		getData()
	}, [])

console.log('rendering')
	return (
		<div className=" bg-modulebackground">
			<div className="max-w-6xl m-auto bg-white p-10">
				<div className=" flex flex-col items-center text-center border-[0.5px] border-greybackground border-">
					{data?.Name}
				</div>
			</div>
		</div>
	);
};

export default ProductPage;


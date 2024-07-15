import { useParams} from 'react-router-dom'
import {Perfume, perfumeData} from "../perfumeData.ts";
import {useEffect, useState} from "react";


const ProductPage = () => {
	const { id } = useParams()
	const perfumeId = Number(id)
	const [ perfume, setPerfume ] = useState<null | Perfume >( null)

	useEffect(() => {
		const fetchedPerfume = perfumeData.find((product =>  product.id === perfumeId));
		if(fetchedPerfume) {
			setPerfume(fetchedPerfume)
		}
	}, [perfumeId]);


	return (
		<div className=" bg-modulebackground">
			<div className="max-w-6xl m-auto bg-white p-10">
				<div className=" flex flex-col items-center text-center border-[0.5px] border-greybackground border-">
					{perfume?.title}
				</div>
			</div>
		</div>
	);
};

export default ProductPage;

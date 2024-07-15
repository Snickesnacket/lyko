import { useParams} from 'react-router-dom'
import { perfumeData} from "../perfumeData.ts";
import { useMemo} from "react";


const ProductPage = () => {
	const { id } = useParams()
	const perfumeId = Number(id)

	const perfume = useMemo(() =>
			perfumeData.find(product => product.id === perfumeId),
		[perfumeId]
	);

	console.log('rendering')

	if (!perfume) {
		return <div>Loading...</div>
	}

console.log('rendering')
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

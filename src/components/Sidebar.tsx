import ToggleSidebar from "./ToggleSidebar.tsx";
import {Product} from "../index.product.ts";

interface IProps {
	products: Product[]
}
const Sidebar: React.FC<IProps> = ({products}) =>  {
	
	return (
		<aside className="hidden lg:block">
			<div className="border-[0.5px] border-gray-300 h-fit">
				<ToggleSidebar products={ products} />
			</div>
		</aside>

	)
}

export default Sidebar
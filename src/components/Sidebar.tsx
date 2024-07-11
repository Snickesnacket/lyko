import ToggleSidebar from "./ToggleSidebar.tsx";

function Sidebar () {
	
	return (
		<aside className="hidden lg:block">
			<div className="border-[0.5px] border-gray-300 h-fit">
				<ToggleSidebar />
			</div>
		</aside>

	)
}

export default Sidebar
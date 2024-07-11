
import logo from '../assets/lyko.svg'
import {useState} from "react";
function Navbar () {

	const [visibility, setVisibility] = useState(false)

	return (
		<>
			<nav className="lg:hidden bg-gray-950 fixed top-0 left-0 right-0 p-5 h-20 flex justify-between items-center">
					<div>
						<img className="object-contain h-full" src={logo} alt="lyko-logga"/>
					</div>
					<div
						className={`flex flex-col  absolute top-20 left-0 bg-gray-950 w-full pl-5 pb-5 gap-5 ${visibility ? '' : 'hidden'}`}>
						<a className="text-white" href="#news">News</a>
						<a className="text-white" href="#contact">Contact</a>
						<a className="text-white" href="#about">About</a>
					</div>
					<button onClick={() => setVisibility(!visibility)}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="size-10">
							<path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
						</svg>
					</button>
			</nav>

			<nav className="hidden bg-gray-950 fixed top-0 left-0 p-5 h-20 w-full lg:flex justify-between items-center">
				<div className="max-w-6xl flex px-5 w-full justify-between m-auto">
					<img className="object-contain h-full" src={logo} alt="lyko-logga"/>
					<div className="bg-gray-950 space-x-3">
						<a className="text-white" href="#news">News</a>
						<a className="text-white" href="#contact">Contact</a>
						<a className="text-white" href="#about">About</a>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
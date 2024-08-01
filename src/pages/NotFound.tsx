import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<>
			<h1>Sorry, that page could not be found 😢!</h1>

			<Link to="/">
				<button>To the start page</button>
			</Link>
		</>
	);
};

export default NotFound;

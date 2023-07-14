import React from "react";
import { Link } from "react-router-dom";
function NavOption({ path, name }) {
	return (
		<Link to={path}>
			<div className=" duration-300 hover:bg-main-blue-dark hover:text-main-orange 
							 py-6 px-3">
				{name}
			</div>
		</Link>
	);
}

export default NavOption;

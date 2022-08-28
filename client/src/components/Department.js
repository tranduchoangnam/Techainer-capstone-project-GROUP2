import React from "react";
import { Link } from "react-router-dom";
import Normalize from "../modules/Normalize";
function Department({ name, list }) {
	return (
		<div className="bg-main-blue-light rounded-lg p-6 w-3/4 flex flex-col items-center">
			{name}
			<ul className="flex flex-auto gap-10 text-2xl font-bold">
				{/* Everyone has their own page */}
				{list.map(person => {
					return <Link to={`${Normalize(person)}`}>{person}</Link>;
				})}
			</ul>
		</div>
	);
}

export default Department;

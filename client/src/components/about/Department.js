import React from "react";
import { Link } from "react-router-dom";
import Normalize from "../../modules/Normalize";

function Department({ name, list }) {
	return (
		<div className="bg-main-blue-light rounded-lg p-6 w-3/4 flex flex-col items-center text-5xl gap-10">
			{name}
			<ul className="flex flex-auto gap-10 text-2xl font-bold text-center">
				{/* Everyone has their own page */}
				{list.map((person, key) => {
					return (
						<Link to={`${name}-${Normalize(person)}`} key={key}>
							<div
								className="hover:bg-main-blue/50 p-3 rounded-md h-full"
							>
								<img src={require(null||"../../resources/logo.png")} alt="img" />
								{person}
							</div>
						</Link>
					);
				})}
			</ul>
		</div>
	);
}

export default Department;

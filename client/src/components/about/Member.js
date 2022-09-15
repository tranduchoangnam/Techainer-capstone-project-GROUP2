import React from "react";
import { useParams } from "react-router-dom";
import Normalize from "../../modules/Normalize";
import list from "../../resources/members.json";

function Member() {
	let { id } = useParams();
	let result = list.filter(person => {
		let result_id = `${person.department}-${Normalize(person.name)}`;
		return id === result_id;
	})[0]; //get the first element of the array

	console.log(result);
	let { name, department, details } = result;
	return (
		<div
			className=" items-center justify-center flex flex-col
						
                        text-xl font-semibold"
		>
			{id}
			<div>
				<img src={require(null || "../../resources/logo.png")} alt="img" className="h-auto" />
				<div>Name: {name}</div>
				<div>Department: {department}</div>
				<div>Detail: {details}</div>
			</div>
		</div>
	);
}

export default Member;

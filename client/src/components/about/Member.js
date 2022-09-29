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
	let { name, department, details, imageSrc } = result;

	return (
		<div
			className=" items-center justify-center flex flex-col gap-5
						p-5 bg-main-blue-ice/80 w-2/3 rounded-lg
                        text-xl font-semibold text-main-blue-dark"
		>
			<img
				src={require(`${/*imageSrc || */`../../resources/logo.png`}`)}
				alt="img"
				className="h-28"
			/>
			<div className="text-4xl font-bold ">{name}</div>
			<div className="text-xl font-bold">Department: {department}</div>
			<div>{details}</div>
		</div>
	);
}

export default Member;

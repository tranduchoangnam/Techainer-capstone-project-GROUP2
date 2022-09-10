import React from "react";
import Department from "./Department";
import Box from "./BoxComponent";

function DepartmentList({ softwareList, aiList }) {
	return (
		<div
			className="
			items-center justify-center flex flex-col gap-20
			text-xl font-semibold"
		>
			About us
			<div
				className="select-none flex flex-row
					bg-main-blue-light rounded-lg"
			>
				<Box />
				<Box />
				<Box />
				<Box />
			</div>
			<Department key="1" name={"Software"} list={softwareList} />
			<Department key="2" name={"AI"} list={aiList} />
		</div>
	);
}

export default DepartmentList;

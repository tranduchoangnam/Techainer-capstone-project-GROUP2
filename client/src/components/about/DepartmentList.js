import React from "react";
import Department from "./Department";

function DepartmentList({ softwareList, aiList }) {
	return (
		<div
			className="bg-blue-50/95
			items-center justify-center flex flex-col gap-20
			min-h-screen h-fit w-screen min-w-fit 
			scrollbar-hide overflow-auto
			text-xl font-semibold"
		>
			About us
			<Department key="1" name={"Software"} list={softwareList} />
			<Department key="2" name={"AI"} list={aiList} />
		</div>
	);
}

export default DepartmentList;

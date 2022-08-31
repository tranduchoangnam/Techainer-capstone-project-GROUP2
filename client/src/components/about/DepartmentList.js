import React from "react";
import Department from "./Department";

function DepartmentList({ softwareList, aiList }) {
	return (
		<div
			className="
			items-center justify-center flex flex-col gap-20
			text-xl font-semibold"
		>
			About us
			<Department key="1" name={"Software"} list={softwareList} />
			<Department key="2" name={"AI"} list={aiList} />
		</div>
	);
}

export default DepartmentList;

import React from "react";
import DepartmentList from "./DepartmentList";
import { Route, Routes } from "react-router-dom";
// import Normalize from "../../modules/Normalize";
import Member from "./Member";

function About() {
	const softwareList = [
		"Nguyễn Trực Cường",
		"Trần Đức Hoàng Nam",
		"Lê Trần Thắng",
	];
	const aiList = ["Trịnh Văn Chiến", "Cù Minh Hoàng", "Hồ Minh Khôi"];
	return (
		<div
			className="bg-blue-50/50 py-24
			items-center flex flex-col gap-20
			min-h-screen h-fit w-screen min-w-fit 
			scrollbar-hide overflow-auto
			text-xl font-semibold"
		>
			<Routes>
				<Route path="/">
					<Route
						index
						element={
							<DepartmentList softwareList={softwareList} aiList={aiList} />
						}
					/>
				</Route>
				<Route path=":id" element={<Member />}></Route>
			</Routes>
		</div>
	);
}

export default About;

import React from "react";
import Department from "./Department";
function About() {
	return (
		<div
			className="bg-blue-50/95 pt-20 
						items-center justify-center flex flex-col gap-20
						min-h-screen h-fit w-screen min-w-fit 
						scrollbar-hide overflow-auto mt-1/6
                        text-xl font-semibold"
                        
		>
			About us
            <Department name={"Software"} list={["Nguyễn Trực Cường", "Trần Đức Hoàng Nam", "Lê Trần Thắng"]}/>
            <Department name={"AI"} list={["Trịnh Văn Chiến", "Cù Minh Hoàng", "Hồ Minh Khôi"]}/>
		</div>
        
	);
}

export default About;

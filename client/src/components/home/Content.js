import React from "react";
import FileInput from "./FileInput";
import VideoPlayer from "./VideoPlayer";

function Content() {
	return (
		<div
			className="bg-blue-50/95 pt-20
						items-center justify-center 
						min-h-screen h-fit w-1/2 min-w-fit 
						scrollbar-hide overflow-auto mt-1/6"
		>
			<div className="flex flex-col items-center text-5xl m-6 font-semibold text-sky-900">
				<img
					src={require("../../resources/maskicon.png")}
					alt="img"
					className="h-20 select-none"
				/>
				Mask detection
			</div>
			<FileInput />

			<div className="flex flex-col items-center text-5xl mt-32 font-semibold text-sky-900">
				Result
			</div>
			<div className="flex flex-col items-center m-6 h-auto bg-main-blue p-10 rounded-3xl shadow-lg">
				<VideoPlayer src={"https://youtu.be/2xx_2XNxxfA" /*Placeholder*/} />
			</div>
		</div>
	);
}

export default Content;

import React from "react";
import FileInput from "./FileInput";
import VideoPlayer from "./VideoPlayer";
import SubmitButton from "./SubmitButton";

function Content() {
	const submitVideo = file => {
		if (!file) return;
		console.log(`submitted ${file.name}`);
	};
	return (
		<div
			className="bg-blue-50/95 pt-20 
						items-center justify-center 
						min-h-screen h-fit w-1/2 min-w-fit 
						scrollbar-hide overflow-auto mt-1/6"
		>
			<div className="flex flex-col items-center text-5xl m-6 font-semibold text-sky-900">
				Mask detection
			</div>
			<FileInput />
			<SubmitButton submitVideo={submitVideo} />
			<div className="mt-36">
				<VideoPlayer src={"https://youtu.be/2xx_2XNxxfA"} />
			</div>
		</div>
	);
}

export default Content;

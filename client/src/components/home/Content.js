import FileInput from "./FileInput";
import ImageGallery from "./ImageGallery";
import { useState, useRef } from "react";
import LoadingSpinner from "./LoadingSpinner";

function Content() {
	const bottomRef = useRef(null);
	const [resultList, setResultList] = useState([]);
	const [processing, setProcessing] = useState(false);

	const ProcessResponse = res => {
		if (!res) return;
		// res = testData;
		const list = JSON.parse(JSON.stringify(res));
		console.log("list", list);
		setResultList(list);
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div
			className="bg-blue-50/80 pt-20
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
			<FileInput
				setProcessing={setProcessing}
				ProcessResponse={ProcessResponse}
			/>

			<div className="flex flex-col items-center text-5xl mt-32 font-semibold text-sky-900">
				Result
			</div>
			<div className="items-center m-6 h-auto bg-main-blue p-10 rounded-3xl shadow-lg">
				{processing ? (
					<div
						className="flex flex-col gap-5 items-center text-2xl text-main-blue-ice font-semibold "
						role="status"
					>
						<LoadingSpinner />
						<div>🤖 The AI is processing...</div>
					</div>
				) : (
					<ImageGallery resultList={resultList} />
				)}
			</div>
			<div ref={bottomRef}></div>
		</div>
	);
}

export default Content;

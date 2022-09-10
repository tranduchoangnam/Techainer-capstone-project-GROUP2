import { useState, useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import VideoRecordPreview from "./VideoRecordPreview";
import OrangeButton from "../buttons/OrangeButton";
import RedButton from "../buttons/RedButton";
import GreenButton from "../buttons/GreenButton";
import VideoPlayer from "./VideoPlayer";
import PlaySVG from "../svgComponents/PlaySVG";
import StopSVG from "../svgComponents/StopSVG";

function MediaRecorder({ handleVideoInputChange }) {

	//media recorder hook
	const { status, startRecording, stopRecording, mediaBlobUrl, previewStream } =
		useReactMediaRecorder({ video: true, audio: false });

	const [isRecording, setIsRecording] = useState(false);
	useEffect(() => {
		console.log(status);
		return () => {};
	}, [status]);

	//convert blob url to blob
	let UrlToFile = async url => {
		let output = await fetch(url)
			.then(res => res.blob()) //convert response to a blob
			.then(blob => {
				console.log("Blob: ", blob); //inspection
				return new File([blob], `recorded_video_${new Date().getTime}.mp4`); //blob to file
			});
		return output;
	};

	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-row justify-around">
				{isRecording ? (
					<RedButton
						svg={<StopSVG />}
						text={"Stop"}
						handleSubmit={e => {
							stopRecording(e);
							setIsRecording(false);
						}}
					/>
				) : (
					<GreenButton
						svg={<PlaySVG />}
						text={"Start"}
						handleSubmit={e => {
							startRecording(e);
							setIsRecording(true);
						}}
					/>
				)}
			</div>
			{isRecording ? (
				<div className="flex justify-center flex-col gap-10 items-center text-main-blue-ice text-xl font-bold">
					Live Preview
					{status === "acquiring_media" ? (
							<div
								role="status"
								class="flex justify-center items-center max-w-sm h-56 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
								>
								Connecting to camera...
								<svg
									class="w-12 h-12 text-gray-200 dark:text-gray-600"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 384 512"
								>
									<path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
								</svg>
								<span class="sr-only">Loading...</span>
							</div>
					) : (
						<VideoRecordPreview stream={previewStream} />
					)}
				</div>
			) : mediaBlobUrl ? (
				<div className="flex justify-center items-center flex-col gap-10">
					<div className="flex justify-center items-center flex-col text-main-blue-ice text-xl font-bold">
						Recorded Video
						<VideoPlayer src={mediaBlobUrl} />
					</div>
					<div className="flex justify-center items-center flex-col">
						<OrangeButton
							text={"Confirm"}
							handleSubmit={e => {
								UrlToFile(mediaBlobUrl).then(res => {
									e = res;
									handleVideoInputChange(e);
								});
							}}
						/>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default MediaRecorder;

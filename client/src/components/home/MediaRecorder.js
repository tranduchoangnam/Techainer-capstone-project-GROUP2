import { useState, useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import VideoRecordPreview from "./VideoRecordPreview";
import OrangeButton from "../buttons/OrangeButton";
import VideoPlayer from "./VideoPlayer";
import PlaySVG from "../svgComponents/PlaySVG";
import StopSVG from "../svgComponents/StopSVG";

function MediaRecorder({ handleVideoInputChange }) {
	const { status, startRecording, stopRecording, mediaBlobUrl, previewStream } =
		useReactMediaRecorder({ video: true, audio: false });

	const [isRecording, setIsRecording] = useState(false);
    useEffect(() => {
        console.log(status);
        return () => {};
    }, [status]);
    
	//convert blob url to blob
	let UrlToFile = async url => {
		let output = await fetch(url).then(
			res => new File([res.blob()], "recorded video")
		);
		return output;
	};


	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-row justify-around">
				{isRecording ? (
					<OrangeButton
						svg={<StopSVG />}
						text={"Stop Recording"}
						handleSubmit={e => {
							stopRecording(e);
							setIsRecording(false);
						}}
					/>
				) : (
					<OrangeButton
						svg={<PlaySVG />}
						text={"Start Recording"}
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
						<div>Connecting to camera...</div>
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

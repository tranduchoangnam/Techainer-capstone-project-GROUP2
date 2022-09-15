import axios from "axios";
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import Dropzone from "./Dropzone";
import OrangeButton from "../buttons/OrangeButton";
import BlueButton from "../buttons/BlueButton";
import ProgressBar from "./ProgressBar";
import MediaRecorder from "./MediaRecorder";
import ClickSVG from "../svgComponents/ClickSVG";
import VideoSVG from "../svgComponents/VideoSVG";
import FolderSVG from "../svgComponents/FolderSVG";
// import { useForm } from "react-hook-form";
function FileInput({ ProcessResponse }) {
	//useState
	const [videoSource, setVideoSource] = useState("");
	const [file, setFile] = useState(null);
	const [progress, setProgress] = useState(0);
	const [status, setStatus] = useState("idle");
	const [uploadMethod, setUploadMethod] = useState("default");
	const [submitStatus, setSubmitStatus] = useState("idle");

	//update the current video registered
	const handleVideoInputChange = e => {
		try {
			const videoFile = e.target ? e.target.files[0] : e;
			if (!videoFile) return;
			setFile(videoFile);
			console.log("videoFile:");
			console.log(videoFile);

			var url = URL.createObjectURL(videoFile);

			console.log("url");
			console.log(url);
			setVideoSource(url);
		} catch (err) {
			console.log(err);
		}
	};

	//send the registered video
	const handleSubmit = async e => {
		e.preventDefault();
		if (!file || submitStatus === "submitting" || submitStatus === "processing")
			return; //no file or the client and/or server are doing sth else
		setSubmitStatus("submitting");
		try {
			const formData = new FormData();
			console.log(`submitted ${file.name}`, file);
			formData.append("file", file, file.name);

			console.log("formData: ");
			for (var pair of formData.entries()) {
				console.log(pair[0] + ", " + pair[1]);
			} //for inspection
			setStatus("connecting");
			const config = {
				onUploadProgress: progressEvent => {
					setProgress(
						Math.round((progressEvent.loaded / progressEvent.total) * 100) //set sending to backend progress
					);
				},
			};

			//post the video file to server as FormData
			const id = await axios
				.post(`${process.env.REACT_APP_API_URL}/uploads`, formData, config)
				.then(() => {
					setSubmitStatus("processing"); //server and AI do the processing
					console.log(submitStatus);
				});
			//get result using the id
			const response = await axios
				.get(`${process.env.REACT_APP_API_URL}/result/${id}`)
				.then(() => {
					setSubmitStatus("idle"); //allow another submission
					console.log(submitStatus);
				});

			ProcessResponse(response);
		} catch (err) {
			setSubmitStatus("idle");
			setStatus("error");
			console.log(err);
		}
	};

	return (
		<>
			<div className="flex flex-row w-full h-auto items-center">
				<BlueButton
					svg={<FolderSVG />}
					isSelected={uploadMethod === "default"}
					text="Upload"
					handleSubmit={e => {
						e.preventDefault();
						setUploadMethod("default");
						setVideoSource(null);
					}}
				/>
				<BlueButton
					svg={<VideoSVG />}
					isSelected={uploadMethod === "record"}
					text="Record"
					handleSubmit={e => {
						e.preventDefault();
						setUploadMethod("record");
						setVideoSource(null);
					}}
				/>
			</div>

			{/* VIDEO PREVIEW  */}

			<div className="flex flex-col items-center m-6 h-auto bg-main-blue p-10 rounded-3xl shadow-lg">
				{videoSource ? (
					<div className="flex flex-col items-center text-main-blue-ice font-bold gap-4">
						The video is ready for submission!
						<VideoPlayer src={videoSource} />
					</div>
				) : uploadMethod === "default" ? (
					<Dropzone handleVideoInputChange={handleVideoInputChange} />
				) : uploadMethod === "record" ? (
					<MediaRecorder handleVideoInputChange={handleVideoInputChange} />
				) : (
					""
				)}
			</div>

			<div className="flex flex-row-reverse w-full h-auto items-center">
				<OrangeButton
					svg={<ClickSVG />}
					text={"Submit"}
					handleSubmit={handleSubmit}
				/>
				<ProgressBar status={status} progress={progress} />
			</div>
		</>
	);
}

export default FileInput;

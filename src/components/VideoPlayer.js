import React from "react";
import ReactPlayer from "react-player";
function VideoPlayer({ src }) {
	return (
		<div className="flex flex-col items-center m-6 h-auto bg-slate-400 p-10 rounded-3xl shadow-lg">
			<ReactPlayer controls url={src || "https://youtu.be/dQw4w9WgXcQ"} />
		</div>
	);
}

export default VideoPlayer;

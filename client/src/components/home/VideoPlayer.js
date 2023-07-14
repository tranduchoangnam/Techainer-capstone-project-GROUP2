import React from "react";
import ReactPlayer from "react-player";
function VideoPlayer({ src }) {
	return (
		<ReactPlayer
			className="overflow-hidden rounded-md"
			height="360px"
			width="auto"
			controls
			url={src}
		/>
	);
}

export default VideoPlayer;

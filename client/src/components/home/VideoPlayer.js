import React from "react";
import ReactPlayer from "react-player";
function VideoPlayer({ src }) {
	return (
		<div className="overflow-hidden rounded-md h-80 max-w-screen-sm">
			<ReactPlayer
				height="100%"
				controls
				url={src}
			/>
			;
		</div>
	);
}

export default VideoPlayer;

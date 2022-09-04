import { useEffect, useRef } from "react";
function VideoRecordPreview({ stream }) {
	const videoRef = useRef(null);
	useEffect(() => {
		if (videoRef.current && stream) {
			videoRef.current.srcObject = stream;
		}
		return () => {};
	}, [stream]);
	if (!stream) {
		return "";
	}
	return stream ? (
		<div className="overflow-hidden rounded-md h-80 w-auto">
			<video ref={videoRef} autoPlay />
		</div>
	) : (
		""
	);
}

export default VideoRecordPreview;

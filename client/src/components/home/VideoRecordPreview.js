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
			<video className="overflow-hidden rounded-md h-80 w-fit" ref={videoRef} autoPlay />

	) : (
		""
	);
}

export default VideoRecordPreview;

import React from "react";
import { useDropzone } from "react-dropzone";
function Dropzone({ handleVideoInputChange }) {
	const onDrop = async acceptedFiles => {
		handleVideoInputChange(acceptedFiles[0]);
	};

	const { getRootProps, getInputProps } = useDropzone({
		accept: {
			"video/mp4": [".mp4"],
		},
		onDrop,
	});
	return (
		<div
			{...getRootProps()}
			htmlFor="dropzone-file"
			className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center 
                        rounded-xl border-2 border-dashed border-main-blue-light bg-main-blue-ice 
                        hover:bg-main-blue-light hover:border-main-blue-dark
                        p-6 text-center"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-10 w-10 text-blue-500"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
				/>
			</svg>

			<h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">
				Video File
			</h2>

			<p className="mt-2 text-gray-500 tracking-wide">
				Click to upload or drag & drop your .MP4 file here{" "}
			</p>

			<input
				{...getInputProps()}
				id="dropzone-file"
				accept=".mp4"
				onChange={handleVideoInputChange}
				type="file"
				className="hidden"
			/>
		</div>
	);
}

export default Dropzone;

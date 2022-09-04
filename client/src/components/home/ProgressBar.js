import React from "react";

function ProgressBar({ status, progress }) {
	return progress > 0 ? (
		<div className="px-10 w-1/3">
			{`Progress: ${progress}%`}
			<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
				<div
					className="bg-blue-600 h-2.5 rounded-full"
					style={{ width: `${progress}%` }}
				></div>
			</div>
			{progress >= 100 ? <>Done!</> : ""}
		</div>
	) : status === "connecting" ? (
        <div className="px-10 text-main-blue-dark">
            Connecting to the server...
        </div>
	) : status === "error" ? (
		<div className="px-10 text-red-600 font-bold">
            Sorry, it seems like we've encountered an error!
        </div>
	): "";
}

export default ProgressBar;

// import { useEffect } from "react";

function ImageGallery({ resultList }) {
	return (
		<div className="grid grid-cols-4 gap-10">
			{resultList.map((item, i) => {
				const [hasMask, certainty] = item.masked.toLowerCase().split(": ", 2);
				console.log(hasMask, certainty);

				return (
					// <div className={`flex flex-col text-${item.textColor}`} key={`${i}`}>
					<div className={`flex flex-col items-center text-main-blue-ice`} key={`${i}`}>
						<img
							// className={`border-${item.borderColor}`}
							className={`border-4 border-main-orange`}
							src={item.path}
							alt={`${i}`}
						/>
						{`Certainty: ${certainty}`}
					</div>
				);
			})}
		</div>
	);
}

export default ImageGallery;

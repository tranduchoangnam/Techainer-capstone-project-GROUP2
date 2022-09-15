// import { useEffect } from "react";

function ImageGallery({ resultList }) {
	// useEffect(() => {
	// 	const generateStyle = list => {
	// 		resultList.map(item => {
	// 			const [hasMask, certainty] = item.masked.toLowerCase().split(": ", 2);
	// 			console.log(hasMask, certainty);
	// 			let certaintyLevel = Math.ceil(parseFloat(certainty) / 20); //return certainty level from 1 to 5
	// 			item.textColor = "green";
	// 			item.borderColor = hasMask === "mask" ? "green-500" : "red-600";
	// 			switch (certaintyLevel) {
	// 				case 1:
	// 					item.textColor = "red-600";
	// 					break;
	// 				case 2:
	// 					item.textColor = "amber-500";
	// 					break;
	// 				case 3:
	// 					item.textColor = "orange-500";
	// 					break;
	// 				case 4:
	// 					item.textColor = "yellow-500";
	// 					break;
	// 				case 5:
	// 					item.textColor = "lime-500";
	// 					break;
	// 				default:
	// 					break;
	// 			}
	// 			return item;
	// 		});
	// 	};
	// 	generateStyle(resultList);
	// }, [resultList]);
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

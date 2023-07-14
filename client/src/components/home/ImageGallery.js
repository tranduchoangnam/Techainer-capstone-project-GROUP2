// import { useEffect } from "react";

function ImageGallery({ resultList }) {
  return (
    <div className="grid grid-cols-4 gap-10">
      {resultList.map((item, i) => {
        const [hasMask, certainty] = item.masked.toLowerCase().split(": ", 2);
        console.log(hasMask, certainty);
		let color = "border-[#00ff00]";
		if(hasMask === "no mask") color = "border-[#ff0000]";
        return (
          // <div className={`flex flex-col text-${item.textColor}`} key={`${i}`}>
          <div
            className={`flex flex-col items-center text-main-blue-ice`}
            key={`${i}`}
          >
            <img
              // className={`border-${item.borderColor}`}
              className={`rounded-lg border-4 ${color}`}
              src={item.path}
              alt={`${i}`}
            />
            <div>{`${hasMask}`}</div>
            <div>{`Certainty: ${certainty}`}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ImageGallery;

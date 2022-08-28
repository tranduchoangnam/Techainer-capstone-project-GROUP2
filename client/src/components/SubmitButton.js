import React from "react";
import { file } from "./FileInput";

function SubmitButton({submitVideo}) {

    const handleSubmit = () => {
        submitVideo(file);
    }
    return (
		<div className="flex flex-row-reverse w-full h-auto items-center">
			<label
				className="w-auto flex flex-row items-center px-4 pt-2 pb-3 bg-orange-300  hover:scale-105
                    text-blue rounded-lg shadow-lg tracking-wide uppercase 
                    border border-blue cursor-pointer mr-6
                  hover:bg-main-orange hover:text-orange-100"
			>
				<span className="mt-2 text-base leading-normal select-none">Submit</span>
                <button onClick={handleSubmit} type="submit" class="hidden" ></button>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					className="ml-2 mt-2 w-6 h-6"
				>
					<path
						fillRule="evenodd"
						d="M6.111 11.89A5.5 5.5 0 1115.501 8 .75.75 0 1017 8a7 7 0 10-11.95 4.95.75.75 0 001.06-1.06zm2.121-5.658a2.5 2.5 0 000 3.536.75.75 0 11-1.06 1.06A4 4 0 1114 8a.75.75 0 01-1.5 0 2.5 2.5 0 00-4.268-1.768zm2.534 1.279a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z"
						clipRule="evenodd"
					/>
				</svg>
			</label>
		</div>
	);
}

export default SubmitButton;

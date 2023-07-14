import React from "react";

function Button({ isSelected, text, handleSubmit, svg }) {
	return (
		<label
			className="w-auto flex flex-row items-center px-4 pt-2 pb-3 bg-red-300  hover:scale-105
                    text-blue rounded-lg shadow-lg tracking-wide uppercase 
                    border border-blue cursor-pointer mr-6
                  duration-100 hover:bg-red-600 hover:text-red-100"
		>
			<span className="mt-2 text-base leading-normal select-none">{text}</span>
			<button onClick={handleSubmit} type="submit" className="hidden"></button>

			{svg}
		</label>
	);
}

export default Button;
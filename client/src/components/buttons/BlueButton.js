import React from "react";

function SubmitButton({ isSelected, text, handleSubmit, svg }) {
	return (
		<label
			className={`w-auto flex flex-row items-center px-4 pt-2 pb-3 ${
				isSelected ? "bg-main-blue" : "bg-main-blue-ice"
			} hover:scale-105
			${
				isSelected ? "text-main-blue-ice" : "text-main-blue-dark"
			} rounded-lg shadow-lg tracking-wide uppercase 
			border border-blue cursor-pointer  ml-6
		  duration-100 hover:bg-main-blue hover:text-main-blue-ice`}
		>
			<span className="mt-2 text-base leading-normal select-none">{text}</span>
			<button onClick={handleSubmit} type="submit" className="hidden"></button>
			{svg}
		</label>
	);
}

export default SubmitButton;

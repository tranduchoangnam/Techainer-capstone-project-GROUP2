/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				"main-blue": "#3D5A80",
				"main-blue-light": "#98C1D9",
				"main-blue-ice": "#E0FBFC",
				"main-blue-dark": "#293141",
				"main-orange": "#EE6C4D",
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};

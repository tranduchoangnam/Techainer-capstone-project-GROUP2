/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				"main-blue": {
					DEFAULT: "#3D5A80",
					light: "#98C1D9",
					dark: "#293141",
					ice: "#E0FBFC",
				},

				"main-orange": { 
					DEFAULT: "#EE6C4D" ,
					light: "#FFB191",
					superlight: "#FAD7CF"
			},
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};

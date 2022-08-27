/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				"main-blue": "3D5A80",
				"light-blue": "98C1D9",
				"ice-blue": "E0FBFC",
				"dark-blue": "293141",
				"main-orange": "EE6C4D",
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {}
	},
	plugins: [require("tailwind-scrollbar")],

	animation: {
		"background-shine": "background-shine 2s linear infinite"
	},
	keyframes: {
		"background-shine": {
		from: {
			backgroundPosition: "0 0"
		},
		to: {
			backgroundPosition: "-200% 0"
		}
		}
	}
}



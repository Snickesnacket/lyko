module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				background: "#ffe",
				modulebackground: "rgb(242,243, 245)",
				greybackground: "rgb(233,234,236)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

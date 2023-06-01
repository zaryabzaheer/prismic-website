module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./slices/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontWeight: {
			hairline: 100,
			thin: 200,
			light: 200,
			normal: 300,
			medium: 400,
			semibold: 500,
			bold: 600,
			extrabold: 800,
			black: 900,
		},
		container: {
			padding: {
				DEFAULT: "1.5rem",
				xs: "1rem",
				sm: "2rem",
				md: "2rem",
				lg: "1rem",
				xl: "1rem",
				"2xl": "2rem",
			},
			screens: {
				xs: "400px",
				sm: "768px",
				md: "1200px",
				lg: "1600px",
				xl: "1600px",
			},
			center: true,
		},
		extend: {
			spacing: {
				"5vh": "5vh",
				"10vh": "10vh",
				"15vh": "15vh",
				"30vh": "30vh",
			},
			backgroundImage: {
				"nav-open": "linear-gradient(to left, #2f2f2f 50%, #404040 50%)",
			},
			colors: {
				"hn-lime": "#E7FF7F",
				"dark-grey": "#2f2f2f",
				accent: "#E8FF85",
				grey: "#969595",
			},
			fontFamily: {
				l10: ["L10", "sans-serif"],
			},
			lineHeight: {
				"extra-loose": "3",
				12: "3rem",
			},
			screens: {
				"2xl": { raw: "(min-width: 1536px)" },
				"-2xl": { raw: "(max-width: 1535px)" },
				"-xl": { raw: "(max-width: 1279px)" },
				"-lg": { raw: "(max-width: 1023px)" },
				"-md": { raw: "(max-width: 767px)" },
				"-sm": { raw: "(max-width: 639px)" },
			},
			fontSize: {
				"2xs": ".625rem",
				"3xs": ".5rem",
			},
			margin: {
				"1/12": "8.33333333%",
				"2/12": "16.66666667%",
				"3/12": "25%",
				"4/12": "33.33333333%",
				"5/12": "41.66666667%",
				"6/12": "50%",
				"7/12": "58.33333333%",
				"8/12": "66.66666667%",
				"9/12": "75%",
				"10/12": "83.33333333%",
				"11/12": "91.66666667%",
			},
			width: {
				88: "22rem",
			},
			maxWidth: {
				xmd: "22rem",
			},
			keyframes: {
				"fade-in-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(+10px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
			},
			animation: {
				"fade-in-up": "fade-in-up 0.5s ease-out",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

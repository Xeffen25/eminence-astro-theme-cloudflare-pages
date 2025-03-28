// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	printWidth: 120,
	tabWidth: 4,
	useTabs: true,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
		{
			files: "*.svg",
			options: {
				parser: "html",
			},
		},
	],
};

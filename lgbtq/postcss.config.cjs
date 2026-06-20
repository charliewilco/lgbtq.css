module.exports = (context) => ({
	map: false,
	plugins: {
		"postcss-import": {},
		autoprefixer: {},
		"postcss-reporter": {
			clearMessages: true,
		},
		...(context.env === "production" ? { cssnano: {} } : {}),
	},
});

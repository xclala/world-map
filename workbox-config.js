module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
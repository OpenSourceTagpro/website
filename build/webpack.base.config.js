module.exports = {
	context: `${__dirname}/../`,
	target: 'web',
	resolve: {
		extensions: ['.js', '.json', '.sass'],
		alias: {
			Components: `${__dirname}/../client/components`,
			Modules: `${__dirname}/../client/modules`,
			API: `${__dirname}/../client/api`,
			BrowserHistory$: `${__dirname}/../client/browser-history`,
			GlobalStyleVars$: `${__dirname}/../client/global-styles/base/_vars.sass`
		}
	},
	output: {
		filename: 'bundle.js'
	}
}

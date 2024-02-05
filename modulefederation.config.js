const { dependencies } = require("./package.json");

module.exports = {
	name: "echartstest",
	filename: "remoteEntry.js",
	remotes: {},
	exposes: {},
	shared: {
		...dependencies,
		react: {
			singleton: true,
			requiredVersion: dependencies["react"],
		},
		"react-dom": {
			singleton: true,
			requiredVersion: dependencies["react-dom"],
		},
	},
};

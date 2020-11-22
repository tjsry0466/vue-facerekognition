const path = require("path");

module.exports = {
	outputDir : path.resolve("../facecogAPI/public"),
	devServer: {
	    proxy: {
		'/': {
			target: 'http://localhost:3000/',
			changeOrigin: true,
			pathRewirte:{
				"": ''
			}
		},
		'/face': {
			target: 'http://localhost:3000/face',
			changeOrigin: true,
			pathRewirte:{
				"": ''
			}
		}
	    }
	}
};

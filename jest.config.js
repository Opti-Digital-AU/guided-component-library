module.exports = {
	testEnvironment: "jsdom",
	moduleNameMapper: {
		".(css)$": "identity-obj-proxy",
        // Uncomment below to support other css types also
		// ".(css|less|sass|scss)$": "identity-obj-proxy",
	},
};

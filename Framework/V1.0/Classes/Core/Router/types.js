// import isApplication from '/Framework/V1.0/TypeChecks/isApplication';
// import isRole from '/Framework/V1.0/TypeChecks/isRole';
// import isFeature from '/Framework/V1.0/TypeChecks/isFeature';
// import isPage from '/Framework/V1.0/TypeChecks/isPage';
// import isEndpoint from '/Framework/V1.0/TypeChecks/isEndpoint';

let types = {
	object: {
		// application: isApplication,
		// role: isRole,
		// feature: isFeature,
		// page: isPage,
		// endpoint: isEndpoint
	}
};

//this is an ugly workaround to a cyclical dependency issue
Object.defineProperties(types.object, {
	application: {
		get: function() {
			return JSUI.TypeChecks.isApplication;
		},
		enumerable: true,
		configurable: true
	},
	role: {
		get: function() {
			return JSUI.TypeChecks.isRole;
		},
		enumerable: true,
		configurable: true
	},
	feature: {
		get: function() {
			return JSUI.TypeChecks.isFeature;
		},
		enumerable: true,
		configurable: true
	},
	page: {
		get: function() {
			return JSUI.TypeChecks.isPage;
		},
		enumerable: true,
		configurable: true
	},
	endpoint: {
		get: function() {
			return JSUI.TypeChecks.isEndpoint;
		},
		enumerable: true,
		configurable: true
	}
});

export default types;
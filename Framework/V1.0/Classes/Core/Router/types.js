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
	},
	function: {
		// Application: isUApplication,
		// Role: isURole,
		// Feature: isUFeature,
		// Page: isUPage,
		// Endpoint: isUEndpoint
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

Object.defineProperties(types.function, {
	Application: {
		get: function() {
			return JSUI.TypeChecks.isUApplication;
		},
		enumerable: true,
		configurable: true
	},
	Role: {
		get: function() {
			return JSUI.TypeChecks.isURole;
		},
		enumerable: true,
		configurable: true
	},
	Feature: {
		get: function() {
			return JSUI.TypeChecks.isUFeature;
		},
		enumerable: true,
		configurable: true
	},
	Page: {
		get: function() {
			return JSUI.TypeChecks.isUPage;
		},
		enumerable: true,
		configurable: true
	},
	Endpoint: {
		get: function() {
			return JSUI.TypeChecks.isUEndpoint;
		},
		enumerable: true,
		configurable: true
	}
});

export default types;
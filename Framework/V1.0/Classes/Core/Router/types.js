
import imports from '/Framework/V1.0/Utilities/Dependencies/imports';


let types = {
	object: {
		application: '/Framework/V1.0/TypeChecks/isApplication',
		role: '/Framework/V1.0/TypeChecks/isRole',
		feature: '/Framework/V1.0/TypeChecks/isFeature',
		page: '/Framework/V1.0/TypeChecks/isPage',
		endpoint: '/Framework/V1.0/TypeChecks/isEndpoint'
	},
	function: {
		Application: '/Framework/V1.0/TypeChecks/isUApplication',
		Role: '/Framework/V1.0/TypeChecks/isURole',
		Feature: '/Framework/V1.0/TypeChecks/isUFeature',
		Page: '/Framework/V1.0/TypeChecks/isUPage',
		Endpoint: '/Framework/V1.0/TypeChecks/isUEndpoint'
	}
};

Object.values(types).forEach((type) => {
	Object.keys(type).forEach((subtype) => {
		let path = type[subtype];
		delete type[subtype];
		Object.defineProperty(type, subtype, {
			get: function() {
				delete type[subtype];
				let imported = imports(path);
				type[subtype] = imported;
				return imported;
			},
			enumerable: true,
			configurable: true
		});
	});
});

export default types;
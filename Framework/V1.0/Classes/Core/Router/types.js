
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import imports from '/Framework/V1.0/Utilities/Dependencies/imports';

let types = {
	object: {
		application: '/Framework/V1.0/TypeChecks/isApplication',
		endpoint: '/Framework/V1.0/TypeChecks/isEndpoint',
		feature: '/Framework/V1.0/TypeChecks/isFeature',
		page: '/Framework/V1.0/TypeChecks/isPage',
		role: '/Framework/V1.0/TypeChecks/isRole',
	},
	function: {
		Application: '/Framework/V1.0/TypeChecks/isUApplication',
		Endpoint: '/Framework/V1.0/TypeChecks/isUEndpoint',
		Feature: '/Framework/V1.0/TypeChecks/isUFeature',
		Page: '/Framework/V1.0/TypeChecks/isUPage',
		Role: '/Framework/V1.0/TypeChecks/isURole',
	}
};

//convert dependency location into lazy loaded property
//this fix was required to get around circular dependency issues
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
			configurable: true,
		});
	});
});

export default types;

exports(types).as('/Framework/V1.0/Classes/Core/Router/types');
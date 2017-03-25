
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import imports from '/JSUI/Source/V1.0/Utilities/Dependencies/imports';

let types = {
	object: {
		application: '/JSUI/Source/V1.0/TypeChecks/isApplication',
		endpoint: '/JSUI/Source/V1.0/TypeChecks/isEndpoint',
		feature: '/JSUI/Source/V1.0/TypeChecks/isFeature',
		page: '/JSUI/Source/V1.0/TypeChecks/isPage',
		role: '/JSUI/Source/V1.0/TypeChecks/isRole',
	},
	function: {
		Application: '/JSUI/Source/V1.0/TypeChecks/isUApplication',
		Endpoint: '/JSUI/Source/V1.0/TypeChecks/isUEndpoint',
		Feature: '/JSUI/Source/V1.0/TypeChecks/isUFeature',
		Page: '/JSUI/Source/V1.0/TypeChecks/isUPage',
		Role: '/JSUI/Source/V1.0/TypeChecks/isURole',
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

exports(types).as('/JSUI/Source/V1.0/Classes/Core/Router/types');
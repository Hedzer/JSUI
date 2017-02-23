import TypeChecks from '/Framework/V1.0/JSUI/TypeChecks';

let types = {
	object: {
		// these are added by the respective typechecks.  This is unusual, but necessary thanks to cyclical dependencies.
		application: TypeChecks.isApplication,
		role: TypeChecks.isRole,
		feature: TypeChecks.isFeature,
		page: TypeChecks.isPage,
		endpoint: TypeChecks.isEndpoint
	}
};

export default types;
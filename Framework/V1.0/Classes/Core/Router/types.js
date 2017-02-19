import isApplication from '/Framework/V1.0/TypeChecks/isApplication';
import isRole from '/Framework/V1.0/TypeChecks/isRole';
import isFeature from '/Framework/V1.0/TypeChecks/isFeature';
import isPage from '/Framework/V1.0/TypeChecks/isPage';
import isEndpoint from '/Framework/V1.0/TypeChecks/isEndpoint';

let types = {
	object: {
		application: isApplication,
		role: isRole,
		feature: isFeature,
		page: isPage,
		endpoint: isEndpoint,
	}
};

export default types;
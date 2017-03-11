
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isArray(u) {
	return Array.isArray(u);
}

exports(isArray).as('/Framework/V1.0/TypeChecks/isArray');


//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isUndefined(u) {
	return (typeof u === 'undefined');
}

exports(isUndefined).as('/Framework/V1.0/TypeChecks/isUndefined');

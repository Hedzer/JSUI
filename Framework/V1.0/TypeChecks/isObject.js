
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isObject(u) {
	return (typeof u === 'object' && u !== null);
}

exports(isObject).as('/Framework/V1.0/TypeChecks/isObject');

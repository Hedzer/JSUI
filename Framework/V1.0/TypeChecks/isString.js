
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isString(u) {
	return (typeof u === 'string');
}

exports(isString).as('/Framework/V1.0/TypeChecks/isString');

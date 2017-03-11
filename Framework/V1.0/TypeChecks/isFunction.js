
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isFunction(u) {
	return (typeof u === 'function');
}

exports(isFunction).as('/Framework/V1.0/TypeChecks/isFunction');


//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isFunction(u) {
	return (typeof u === 'function');
}

exports(isFunction).as('/JSUI/Source/V1.0/TypeChecks/isFunction');


//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

export default function isObject(u) {
	return (typeof u === 'object' && u !== null);
}

exports(isObject).as('/JSUI/Source/1.0.0/TypeChecks/isObject');


//TypeChecks
import isObject from '/JSUI/Source/V1.0/TypeChecks/isObject';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function getter(obj, prop) {
	if (!obj || !isObject(obj)) { return; }
	return obj[prop];
}

exports(getter).as('/JSUI/Source/V1.0/Utilities/Paths/getter');


//TypeChecks
import isObject from '/Framework/V1.0/TypeChecks/isObject';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function getter(obj, prop) {
	if (!obj || !isObject(obj)) { return; }
	return obj[prop];
}

exports(getter).as('/Framework/V1.0/Utilities/Paths/getter');

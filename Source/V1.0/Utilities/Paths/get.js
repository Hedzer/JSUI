
//TypeChecks
import isArray from '/JSUI/Source/V1.0/TypeChecks/isArray';
import isString from '/JSUI/Source/V1.0/TypeChecks/isString';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import getter from '/JSUI/Source/V1.0/Utilities/Paths/getter';

export default function get(obj, path) {
	if (isString(path)) {
		return path.substring(1).split('.').reduce(getter, obj);
	}
	if (isArray(path)) {
		return path.reduce(getter, obj);
	}
}

exports(get).as('/JSUI/Source/V1.0/Utilities/Paths/get');
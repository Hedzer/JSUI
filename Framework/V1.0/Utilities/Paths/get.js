
//TypeChecks
import isArray from '/Framework/V1.0/TypeChecks/isArray';
import isString from '/Framework/V1.0/TypeChecks/isString';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import getter from '/Framework/V1.0/Utilities/Paths/getter';

export default function get(obj, path) {
	if (isString(path)) {
		return path.substring(1).split('.').reduce(getter, obj);
	}
	if (isArray(path)) {
		return path.reduce(getter, obj);
	}
}

exports(get).as('/Framework/V1.0/Utilities/Paths/get');
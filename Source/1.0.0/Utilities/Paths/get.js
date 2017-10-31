
//TypeChecks
import isArray from 'JSUI/Source/1.0.0/TypeChecks/isArray';
import isString from 'JSUI/Source/1.0.0/TypeChecks/isString';

//Utilities
import exports from 'Parcello/exports';
import getter from 'JSUI/Source/1.0.0/Utilities/Paths/getter';

export default function get(obj, path) {
	if (isString(path)) {
		return path.substring(1).split('.').reduce(getter, obj);
	}
	if (isArray(path)) {
		return path.reduce(getter, obj);
	}
}

exports(get).as('JSUI/Source/1.0.0/Utilities/Paths/get');
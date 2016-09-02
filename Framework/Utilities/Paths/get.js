import isString from '/Framework/TypeChecks/isString';
import isArray from '/Framework/TypeChecks/isArray';
import getter from '/Framework/Utilities/Paths/getter';

export default function get(obj, path) {
	if (isString(path)) {
		return path.substring(1).split('.').reduce(getter, obj);
	}
	if (isArray(path)) {
		return path.reduce(getter, obj);
	}
}
import isString from '../../TypeChecks/isString';
import isArray from '../../TypeChecks/isArray';
import getter from './getter';

export default function get(obj, path) {
	if (isString(path)) {
		return path.substring(1).split('.').reduce(getter, obj);
	}
	if (isArray(path)) {
		return path.reduce(getter, obj);
	}
}
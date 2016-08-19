import isObject from '../../TypeChecks/isObject';

export function getter(obj, prop) {
	if (!isObject(obj)) {return; }
	return obj[prop];
}
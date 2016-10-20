import isObject from 'Framework/TypeChecks/isObject';

export default function getter(obj, prop) {
	if (!obj || !isObject(obj)) { return; }
	return obj[prop];
}
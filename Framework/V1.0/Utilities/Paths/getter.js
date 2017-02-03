import isObject from '/Framework/V1.0/TypeChecks/isObject';

export default function getter(obj, prop) {
	if (!obj || !isObject(obj)) { return; }
	return obj[prop];
}
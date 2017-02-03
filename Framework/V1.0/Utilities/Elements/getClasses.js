import isElement from '/Framework/V1.0/TypeChecks/isElement';
import isString from '/Framework/V1.0/TypeChecks/isString';
import isArray from '/Framework/V1.0/TypeChecks/isArray';

export default function getClasses(el) {
	if (!isElement(el)) { return; }
	let classes = {};
	if (isString(el.className)) {
		let list = el.className.split(' ');
		if (isArray(list)) {
			list.forEach((name) => {
				classes[name] = true;
			});
		}
	}
	return classes;
}
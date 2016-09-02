import isElement from '/Framework/TypeChecks/isElement';
import isString from '/Framework/TypeChecks/isString';
import isArray from '/Framework/TypeChecks/isArray';

export default function getClasses(el) {
	if (!isElement(el)) {return; }
	var classes = {};
	if (isString(el.className)) {
		var list = el.className.split(' ');
		if (isArray(list)) {
			list.forEach((name) => {
				classes[name] = true;
			});
		}
	}
	return classes;
}
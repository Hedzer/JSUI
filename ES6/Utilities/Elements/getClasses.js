import isElement from '../../TypeChecks/isElement';
import isString from '../../TypeChecks/isString';
import isArray from '../../TypeChecks/isArray';

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
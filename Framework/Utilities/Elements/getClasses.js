import isElement from 'Framework/TypeChecks/isElement';
import isString from 'Framework/TypeChecks/isString';
import isArray from 'Framework/TypeChecks/isArray';

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

//TypeChecks
import isArray from 'JSUI/Source/1.0.0/TypeChecks/isArray';
import isDOM from 'JSUI/Source/1.0.0/TypeChecks/isDOM';
import isString from 'JSUI/Source/1.0.0/TypeChecks/isString';

//Utilities
import exports from 'Parcello/exports';

export default function getClasses(el) {
	if (!isDOM(el)) { return; }
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

exports(getClasses).as('JSUI/Source/1.0.0/Utilities/Elements/getClasses');


//TypeChecks
import isArray from '/JSUI/Source/V1.0/TypeChecks/isArray';
import isDOM from '/JSUI/Source/V1.0/TypeChecks/isDOM';
import isString from '/JSUI/Source/V1.0/TypeChecks/isString';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

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

exports(getClasses).as('/JSUI/Source/V1.0/Utilities/Elements/getClasses');
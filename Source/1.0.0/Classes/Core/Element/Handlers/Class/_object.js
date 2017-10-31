
//TypeChecks
import isString from 'JSUI/Source/1.0.0/TypeChecks/isString';

//Utilities
import exports from 'Parcello/exports';

export default function _object(classes) {
	let className = '';
	
	Object.keys(classes).forEach((name) => {
		if (classes[name]) {
			className += name;
		}
	});
	
	this.element.className = className;
	return className;
}

exports(_object).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Class/_object');

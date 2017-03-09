
//TypeChecks
import isString from '/Framework/V1.0/TypeChecks/isString';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

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

exports(_object).as('/Framework/V1.0/Classes/Core/Element/Handlers/Class/_object');

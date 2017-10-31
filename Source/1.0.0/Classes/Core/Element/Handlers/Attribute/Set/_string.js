
//Typechecks
import isNull from 'JSUI/Source/1.0.0/TypeChecks/isNull';
import isUndefined from 'JSUI/Source/1.0.0/TypeChecks/isUndefined';

//Utilities
import exports from 'Parcello/exports';

export default function _set_string(name, value) {
	
	if (isUndefined(value) || isNull(value)) {
		this.element.removeAttribute(name);
		return true;
	}

	this.element.setAttribute(name, value);
	return true;
}

exports(_set_string).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Attribute/Set/_set_string');

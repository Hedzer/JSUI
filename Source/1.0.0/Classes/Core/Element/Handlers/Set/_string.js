
//Utilities
import exports from 'Parcello/exports';

export default function _string(property, value) {
	if (!property) { return; }
	this[property] = value;
	return value;	
}

exports(_string).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Set/_string');

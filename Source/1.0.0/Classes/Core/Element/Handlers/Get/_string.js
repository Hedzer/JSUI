
//Utilities
import exports from 'Parcello/exports';

export default function _string(property) {
	if (!property) { return; }
	return this[property];	
}

exports(_string).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Get/_string');
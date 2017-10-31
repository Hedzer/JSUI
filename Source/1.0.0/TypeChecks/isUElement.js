
//Classes
import Element from 'JSUI/Source/1.0.0/Classes/Core/Element';

//Utilities
import exports from 'Parcello/exports';
import isUOfType from 'JSUI/Source/1.0.0/Utilities/TypeChecks/isUOfType';

export default function isUElement(u) {
	return isUOfType(u, Element);
}

exports(isUElement).as('JSUI/Source/1.0.0/TypeChecks/isUElement');

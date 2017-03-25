
//Classes
import Element from '/JSUI/Source/V1.0/Classes/Core/Element';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/JSUI/Source/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUElement(u) {
	return isUOfType(u, Element);
}

exports(isUElement).as('/JSUI/Source/V1.0/TypeChecks/isUElement');

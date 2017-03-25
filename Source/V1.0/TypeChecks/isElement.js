
//Classes
import Element from '/JSUI/Source/V1.0/Classes/Core/Element';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isElement(u) {
	return (u instanceof Element);
}

exports(isElement).as('/JSUI/Source/V1.0/TypeChecks/isElement');


//Classes
import Element from '/JSUI/Source/1.0.0/Classes/Core/Element';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

export default function isElement(u) {
	return (u instanceof Element);
}

exports(isElement).as('/JSUI/Source/1.0.0/TypeChecks/isElement');

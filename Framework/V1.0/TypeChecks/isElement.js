
//Classes
import Element from '/Framework/V1.0/Classes/Core/Element';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isElement(u) {
	return (u instanceof Element);
}

exports(isElement).as('/Framework/V1.0/TypeChecks/isElement');

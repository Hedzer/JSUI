
//Classes
import Element from '/Framework/V1.0/Classes/Core/Element';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isJSUI(u) {
	return (u instanceof Element);
}

exports(isJSUI).as('/Framework/V1.0/TypeChecks/isJSUI');

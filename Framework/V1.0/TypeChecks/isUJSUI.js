
//Classes
import Element from '/Framework/V1.0/Classes/Core/Element';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUJSUI(u) {
	return isUOfType(u, Element);
}

exports(isUJSUI).as('/Framework/V1.0/TypeChecks/isUJSUI');

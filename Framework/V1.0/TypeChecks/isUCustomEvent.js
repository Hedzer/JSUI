
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUCustomEvent(u) {
	return isUOfType(u, CustomEvent);
}

exports(isUCustomEvent).as('/Framework/V1.0/TypeChecks/isUCustomEvent');


//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';
import isUOfType from '/JSUI/Source/1.0.0/Utilities/TypeChecks/isUOfType';

export default function isUCustomEvent(u) {
	return isUOfType(u, CustomEvent);
}

exports(isUCustomEvent).as('/JSUI/Source/1.0.0/TypeChecks/isUCustomEvent');

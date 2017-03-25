
//Classes
import Navigation from '/JSUI/Source/V1.0/Classes/Core/Navigation';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/JSUI/Source/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUNavigation(u) {
	return isUOfType(u, Navigation);
}

exports(isUNavigation).as('/JSUI/Source/V1.0/TypeChecks/isUNavigation');

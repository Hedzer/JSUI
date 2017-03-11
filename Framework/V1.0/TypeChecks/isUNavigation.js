
//Classes
import Navigation from '/Framework/V1.0/Classes/Core/Navigation';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUNavigation(u) {
	return isUOfType(u, Navigation);
}

exports(isUNavigation).as('/Framework/V1.0/TypeChecks/isUNavigation');

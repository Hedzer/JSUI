
//Classes
import Navigation from '/JSUI/Source/V1.0/Classes/Core/Navigation';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

function isNavigation(u) {
	return (u instanceof Navigation);
}

export default isNavigation;

exports(isNavigation).as('/JSUI/Source/V1.0/TypeChecks/isNavigation');
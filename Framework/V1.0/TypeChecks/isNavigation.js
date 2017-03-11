
//Classes
import Navigation from '/Framework/V1.0/Classes/Core/Navigation';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

function isNavigation(u) {
	return (u instanceof Navigation);
}

export default isNavigation;

exports(isNavigation).as('/Framework/V1.0/TypeChecks/isNavigation');
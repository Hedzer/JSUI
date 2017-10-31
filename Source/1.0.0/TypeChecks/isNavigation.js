
//Classes
import Navigation from 'JSUI/Source/1.0.0/Classes/Core/Navigation';

//Utilities
import exports from 'Parcello/exports';

function isNavigation(u) {
	return (u instanceof Navigation);
}

export default isNavigation;

exports(isNavigation).as('JSUI/Source/1.0.0/TypeChecks/isNavigation');
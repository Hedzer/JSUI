
//Classes
import Navigation from 'JSUI/Source/1.0.0/Classes/Core/Navigation';

//Utilities
import exports from 'Parcello/exports';
import isUOfType from 'JSUI/Source/1.0.0/Utilities/TypeChecks/isUOfType';

export default function isUNavigation(u) {
	return isUOfType(u, Navigation);
}

exports(isUNavigation).as('JSUI/Source/1.0.0/TypeChecks/isUNavigation');

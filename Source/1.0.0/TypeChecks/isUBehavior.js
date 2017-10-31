
//Classes
import Behavior from 'JSUI/Source/1.0.0/Classes/Core/Behavior';

//Utilities
import exports from 'Parcello/exports';
import isUOfType from 'JSUI/Source/1.0.0/Utilities/TypeChecks/isUOfType';

export default function isUBehavior(u) {
	return isUOfType(u, Behavior);
}

exports(isUBehavior).as('JSUI/Source/1.0.0/TypeChecks/isUBehavior');

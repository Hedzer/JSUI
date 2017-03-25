
//Classes
import Behavior from '/JSUI/Source/V1.0/Classes/Core/Behavior';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/JSUI/Source/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUBehavior(u) {
	return isUOfType(u, Behavior);
}

exports(isUBehavior).as('/JSUI/Source/V1.0/TypeChecks/isUBehavior');


//Classes
import Behavior from '/Framework/V1.0/Classes/Core/Behavior';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUBehavior(u) {
	return isUOfType(u, Behavior);
}

exports(isUBehavior).as('/Framework/V1.0/TypeChecks/isUBehavior');

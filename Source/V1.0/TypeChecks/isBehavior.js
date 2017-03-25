

//Classes
import Behavior from '/JSUI/Source/V1.0/Classes/Core/Behavior';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isBehavior(u) {
	return (u instanceof Behavior);
}

exports(isBehavior).as('/JSUI/Source/V1.0/TypeChecks/isBehavior');


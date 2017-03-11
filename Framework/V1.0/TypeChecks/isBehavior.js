

//Classes
import Behavior from '/Framework/V1.0/Classes/Core/Behavior';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isBehavior(u) {
	return (u instanceof Behavior);
}

exports(isBehavior).as('/Framework/V1.0/TypeChecks/isBehavior');


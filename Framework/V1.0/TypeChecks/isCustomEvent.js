
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isCustomEvent(u) {
	return (u instanceof CustomEvent);
}

exports(CustomEvent).as('/Framework/V1.0/TypeChecks/CustomEvent');

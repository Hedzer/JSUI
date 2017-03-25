
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isCustomEvent(u) {
	return (u instanceof CustomEvent);
}

exports(CustomEvent).as('/JSUI/Source/V1.0/TypeChecks/CustomEvent');

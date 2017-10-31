
//Utilities
import exports from 'Parcello/exports';

export default function isCustomEvent(u) {
	return (u instanceof CustomEvent);
}

exports(CustomEvent).as('JSUI/Source/1.0.0/TypeChecks/CustomEvent');

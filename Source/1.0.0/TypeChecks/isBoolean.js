
//Utilities
import exports from 'Parcello/exports';

export default function isBoolean(u) {
	return (typeof u === 'boolean');
}

exports(isBoolean).as('JSUI/Source/1.0.0/TypeChecks/isBoolean');


//Utilities
import exports from 'Parcello/exports';

export default function isUndefined(u) {
	return (typeof u === 'undefined');
}

exports(isUndefined).as('JSUI/Source/1.0.0/TypeChecks/isUndefined');

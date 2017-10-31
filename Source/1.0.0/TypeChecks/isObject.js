
//Utilities
import exports from 'Parcello/exports';

export default function isObject(u) {
	return (typeof u === 'object' && u !== null);
}

exports(isObject).as('JSUI/Source/1.0.0/TypeChecks/isObject');

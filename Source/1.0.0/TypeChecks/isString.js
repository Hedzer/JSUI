
//Utilities
import exports from 'Parcello/exports';

export default function isString(u) {
	return (typeof u === 'string');
}

exports(isString).as('JSUI/Source/1.0.0/TypeChecks/isString');

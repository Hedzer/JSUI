
//Utilities
import exports from 'Parcello/exports';

export default function isRegex(u) {
	return (u instanceof RegExp);
}

exports(isRegex).as('JSUI/Source/1.0.0/TypeChecks/isRegex');

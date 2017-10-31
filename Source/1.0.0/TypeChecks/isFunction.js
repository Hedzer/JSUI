
//Utilities
import exports from 'Parcello/exports';

export default function isFunction(u) {
	return (typeof u === 'function');
}

exports(isFunction).as('JSUI/Source/1.0.0/TypeChecks/isFunction');

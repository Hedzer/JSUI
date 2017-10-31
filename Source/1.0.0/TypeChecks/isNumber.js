
//Utilities
import exports from 'Parcello/exports';

export default function isNumber(u) {
	return (!isNaN(u) && typeof u === 'number');
}

exports(isNumber).as('JSUI/Source/1.0.0/TypeChecks/isNumber');

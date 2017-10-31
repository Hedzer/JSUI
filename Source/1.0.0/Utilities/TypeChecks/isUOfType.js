
//Utilities
import exports from 'Parcello/exports';

export default function isUStyleSheetRule(u, t) {
	return !!(u && u.prototype && (u.prototype instanceof t || u === t));
}

exports(isUStyleSheetRule).as('JSUI/Source/1.0.0/Utilities/TypeChecks/isUStyleSheetRule');


//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isUStyleSheetRule(u, t) {
	return !!(u && u.prototype && (u.prototype instanceof t || u === t));
}

exports(isUStyleSheetRule).as('/JSUI/Source/V1.0/Utilities/TypeChecks/isUStyleSheetRule');

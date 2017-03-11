
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isUStyleSheetRule(u, t) {
	return !!(u && u.prototype && (u.prototype instanceof t || u === t));
}

exports(isUStyleSheetRule).as('/Framework/V1.0/Utilities/TypeChecks/isUStyleSheetRule');

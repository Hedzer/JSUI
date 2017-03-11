
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isRegex(u) {
	return (u instanceof RegExp);
}

exports(isRegex).as('/Framework/V1.0/TypeChecks/isRegex');


//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isRegex(u) {
	return (u instanceof RegExp);
}

exports(isRegex).as('/JSUI/Source/V1.0/TypeChecks/isRegex');

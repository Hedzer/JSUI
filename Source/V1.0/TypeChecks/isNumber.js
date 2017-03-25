
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isNumber(u) {
	return (!isNaN(u) && typeof u === 'number');
}

exports(isNumber).as('/JSUI/Source/V1.0/TypeChecks/isNumber');

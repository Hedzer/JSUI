
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isNumber(u) {
	return (!isNaN(u) && typeof u === 'number');
}

exports(isNumber).as('/Framework/V1.0/TypeChecks/isNumber');

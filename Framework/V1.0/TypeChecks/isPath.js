//TypeChecks
import isString from '/Framework/V1.0/TypeChecks/isString';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isPath(u) {
	return (isString(u) && u.length > 0 && u.charAt(0) === '@');
}

exports(isPath).as('/Framework/V1.0/TypeChecks/isPath');

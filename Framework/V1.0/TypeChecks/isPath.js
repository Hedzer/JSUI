//TypeChecks
import isString from '/Framework/V1.0/TypeChecks/isString';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isPath(u) {

	if (!isString(u)) { return false; }

	let count = u.length;
	if (count < 4) { return false; }
	
	return (u.charAt(0) === '@' && u.charAt(1) === '{' && u.charAt(count - 1) === '}');
}

exports(isPath).as('/Framework/V1.0/TypeChecks/isPath');

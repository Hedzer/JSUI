
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isPath(u) {
	return (typeof u === 'string' && u.length > 0 && u[0] === '@');
}

exports(isPath).as('/Framework/V1.0/TypeChecks/isPath');

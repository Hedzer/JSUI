
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isBoolean(u) {
	return (typeof u === 'boolean');
}

exports(isBoolean).as('/Framework/V1.0/TypeChecks/isBoolean');

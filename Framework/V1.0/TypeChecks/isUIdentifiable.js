
//Constants
import isStatic from '/Framework/V1.0/Constants/Keys/TypeChecks/Identifiable/isStatic';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isUIdentifiable(u) {
	return !!u[isStatic];
}

exports(isUIdentifiable).as('/Framework/V1.0/TypeChecks/isUIdentifiable');

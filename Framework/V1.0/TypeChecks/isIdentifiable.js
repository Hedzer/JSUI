
//Constants
import isInstance from '/Framework/V1.0/Constants/Keys/TypeChecks/Identifiable/isInstance';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isIdentifiable(u) {
	return !!u[isInstance];
}

exports(isIdentifiable).as('/Framework/V1.0/TypeChecks/isIdentifiable');

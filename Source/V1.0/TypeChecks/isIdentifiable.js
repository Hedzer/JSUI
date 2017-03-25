
//Constants
import isInstance from '/JSUI/Source/V1.0/Constants/Keys/TypeChecks/Identifiable/isInstance';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isIdentifiable(u) {
	return !!u[isInstance];
}

exports(isIdentifiable).as('/JSUI/Source/V1.0/TypeChecks/isIdentifiable');

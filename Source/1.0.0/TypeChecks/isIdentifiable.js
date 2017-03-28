
//Constants
import isInstance from '/JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Identifiable/isInstance';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

export default function isIdentifiable(u) {
	return !!u[isInstance];
}

exports(isIdentifiable).as('/JSUI/Source/1.0.0/TypeChecks/isIdentifiable');

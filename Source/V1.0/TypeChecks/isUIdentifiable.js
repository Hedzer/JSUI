
//Constants
import isStatic from '/JSUI/Source/V1.0/Constants/Keys/TypeChecks/Identifiable/isStatic';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isUIdentifiable(u) {
	return !!u[isStatic];
}

exports(isUIdentifiable).as('/JSUI/Source/V1.0/TypeChecks/isUIdentifiable');

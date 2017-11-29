
//Constants
import isStatic from 'JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Identifiable/isStatic';

//Utilities
import exports from 'Parcello/exports';

export default function isUIdentifiable(u) {
	if (!u) { return false; }
	return !!u[isStatic];
}

exports(isUIdentifiable).as('JSUI/Source/1.0.0/TypeChecks/isUIdentifiable');

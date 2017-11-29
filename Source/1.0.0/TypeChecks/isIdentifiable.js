
//Constants
import isInstance from 'JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Identifiable/isInstance';

//Utilities
import exports from 'Parcello/exports';

export default function isIdentifiable(u) {
	if (!u) { return false; }
	return !!u[isInstance];
}

exports(isIdentifiable).as('JSUI/Source/1.0.0/TypeChecks/isIdentifiable');


//Constants
import isStatic from 'JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Eventful/isStatic';

//Utilities
import exports from 'Parcello/exports';

export default function isUEventful(u) {
	if (!u) { return false; }
	return !!u[isStatic];
}

exports(isUEventful).as('JSUI/Source/1.0.0/TypeChecks/isUEventful');

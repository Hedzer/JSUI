
//Constants
import isStatic from 'JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Routable/isStatic';

//Utilities
import exports from 'Parcello/exports';

export default function isURoutable(u) {
	if (!u) { return false; }
	return !!u[isStatic];
}

exports(isURoutable).as('JSUI/Source/1.0.0/TypeChecks/isURoutable');

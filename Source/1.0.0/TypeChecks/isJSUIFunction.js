
//Constants
import isInstance from 'JSUI/Source/1.0.0/Constants/Keys/TypeChecks/JSUIFunction/isInstance';

//Utilities
import exports from 'Parcello/exports';

export default function isJSUIFunction(u) {
	if (!u) { return false; }
	return !!u[isInstance];
}

exports(isJSUIFunction).as('JSUI/Source/1.0.0/TypeChecks/isJSUIFunction');

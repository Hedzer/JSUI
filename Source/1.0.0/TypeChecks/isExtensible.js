
//Constants
import isInstance from 'JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Extensible/isInstance';

//Utilities
import exports from 'Parcello/exports';

export default function isExtensible(u) {
	if (!u) { return false; }
	return !!u[isInstance];
}

exports(isExtensible).as('JSUI/Source/1.0.0/TypeChecks/isExtensible');

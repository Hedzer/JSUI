
//Constants
import isInstance from 'JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Eventful/isInstance';

//Utilities
import exports from 'Parcello/exports';

export default function isEventful(u) {
	if (!u) { return false; }
	return !!u[isInstance];
}

exports(isEventful).as('JSUI/Source/1.0.0/TypeChecks/isEventful');

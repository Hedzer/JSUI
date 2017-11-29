
//Classes
import isInstance from 'JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Routable/isInstance';

//Utilities
import exports from 'Parcello/exports';

export default function isRoutable(u) {
	if (!u) { return false; }
	return !!u[isInstance];
}

exports(isRoutable).as('JSUI/Source/1.0.0/TypeChecks/isRoutable');


//Classes
import isInstance from '/JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Routable/isInstance';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

export default function isRoutable(u) {
	return !!u[isInstance];
}

exports(isRoutable).as('/JSUI/Source/1.0.0/TypeChecks/isRoutable');

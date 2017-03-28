
//Constants
import isInstance from '/JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Eventful/isInstance';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

export default function isEventful(u) {
	return !!u[isInstance];
}

exports(isEventful).as('/JSUI/Source/1.0.0/TypeChecks/isEventful');

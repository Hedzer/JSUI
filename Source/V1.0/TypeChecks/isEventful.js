
//Constants
import isInstance from '/JSUI/Source/V1.0/Constants/Keys/TypeChecks/Eventful/isInstance';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isEventful(u) {
	return !!u[isInstance];
}

exports(isEventful).as('/JSUI/Source/V1.0/TypeChecks/isEventful');

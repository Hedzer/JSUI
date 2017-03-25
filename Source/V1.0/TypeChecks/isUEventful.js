
//Constants
import isStatic from '/JSUI/Source/V1.0/Constants/Keys/TypeChecks/Eventful/isStatic';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isUEventful(u) {
	return !!u[isStatic];
}

exports(isUEventful).as('/JSUI/Source/V1.0/TypeChecks/isUEventful');

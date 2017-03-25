
//Constants
import isStatic from '/JSUI/Source/V1.0/Constants/Keys/TypeChecks/Routable/isStatic';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isURoutable(u) {
	return !!u[isStatic];
}

exports(isURoutable).as('/JSUI/Source/V1.0/TypeChecks/isURoutable');

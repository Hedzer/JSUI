
//Constants
import isStatic from '/JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Routable/isStatic';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

export default function isURoutable(u) {
	return !!u[isStatic];
}

exports(isURoutable).as('/JSUI/Source/1.0.0/TypeChecks/isURoutable');
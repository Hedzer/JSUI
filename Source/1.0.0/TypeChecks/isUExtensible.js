
//Constants
import isStatic from '/JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Extensible/isStatic';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

export default function isUExtensible(u) {
	return !!u[isStatic];
}

exports(isUExtensible).as('/JSUI/Source/1.0.0/TypeChecks/isUExtensible');
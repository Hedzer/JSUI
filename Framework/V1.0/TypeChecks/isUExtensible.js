
//Constants
import isStatic from '/Framework/V1.0/Constants/Keys/TypeChecks/Extensible/isStatic';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isUExtensible(u) {
	return !!u[isStatic];
}

exports(isUExtensible).as('/Framework/V1.0/TypeChecks/isUExtensible');

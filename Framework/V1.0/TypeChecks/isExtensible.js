
//Constants
import isInstance from '/Framework/V1.0/Constants/Keys/TypeChecks/Extensible/isInstance';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isExtensible(u) {
	return !!u[isInstance];
}

exports(isExtensible).as('/Framework/V1.0/TypeChecks/isExtensible');

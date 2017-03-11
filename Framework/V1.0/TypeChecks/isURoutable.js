
//Constants
import isStatic from '/Framework/V1.0/Constants/Keys/TypeChecks/Routable/isStatic';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isURoutable(u) {
	return !!u[isStatic];
}

exports(isURoutable).as('/Framework/V1.0/TypeChecks/isURoutable');

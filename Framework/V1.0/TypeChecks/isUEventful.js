
//Constants
import isStatic from '/Framework/V1.0/Constants/Keys/TypeChecks/Eventful/isStatic';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isUEventful(u) {
	return !!u[isStatic];
}

exports(isUEventful).as('/Framework/V1.0/TypeChecks/isUEventful');

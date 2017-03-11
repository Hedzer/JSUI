
//Constants
import isInstance from '/Framework/V1.0/Constants/Keys/TypeChecks/Eventful/isInstance';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isEventful(u) {
	return !!u[isInstance];
}

exports(isEventful).as('/Framework/V1.0/TypeChecks/isEventful');

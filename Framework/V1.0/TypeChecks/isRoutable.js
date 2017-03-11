
//Classes
import isInstance from '/Framework/V1.0/Constants/Keys/TypeChecks/Routable/isInstance';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isRoutable(u) {
	return !!u[isInstance];
}

exports(isRoutable).as('/Framework/V1.0/TypeChecks/isRoutable');

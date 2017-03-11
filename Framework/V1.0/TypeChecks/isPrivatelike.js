
//Constants
import isInstance from '/Framework/V1.0/Constants/Keys/TypeChecks/Privatelike/isInstance';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isPrivatelike(u) {
	return !!u[isInstance];
}

exports(isPrivatelike).as('/Framework/V1.0/TypeChecks/isPrivatelike');

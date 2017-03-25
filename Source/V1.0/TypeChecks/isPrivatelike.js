
//Constants
import isInstance from '/JSUI/Source/V1.0/Constants/Keys/TypeChecks/Privatelike/isInstance';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isPrivatelike(u) {
	return !!u[isInstance];
}

exports(isPrivatelike).as('/JSUI/Source/V1.0/TypeChecks/isPrivatelike');

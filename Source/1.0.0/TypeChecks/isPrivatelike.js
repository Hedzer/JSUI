
//Constants
import isInstance from '/JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Privatelike/isInstance';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

export default function isPrivatelike(u) {
	return !!u[isInstance];
}

exports(isPrivatelike).as('/JSUI/Source/1.0.0/TypeChecks/isPrivatelike');

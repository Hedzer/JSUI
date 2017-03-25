
//Constants
import isInstance from '/JSUI/Source/V1.0/Constants/Keys/TypeChecks/Styleable/isInstance';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isStyleable(u) {
	return !!u[isInstance];
}

exports(isStyleable).as('/JSUI/Source/V1.0/TypeChecks/isStyleable');

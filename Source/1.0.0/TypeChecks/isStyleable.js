
//Constants
import isInstance from '/JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Styleable/isInstance';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

export default function isStyleable(u) {
	return !!u[isInstance];
}

exports(isStyleable).as('/JSUI/Source/1.0.0/TypeChecks/isStyleable');

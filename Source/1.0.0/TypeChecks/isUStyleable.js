
//Constants
import isStatic from '/JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Styleable/isStatic';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

export default function isUStyleable(u) {
	return !!u[isStatic];
}

exports(isUStyleable).as('/JSUI/Source/1.0.0/TypeChecks/isUStyleable');
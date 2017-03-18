
//Constants
import isStatic from '/Framework/V1.0/Constants/Keys/TypeChecks/Styleable/isStatic';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isUStyleable(u) {
	return !!u[isStatic];
}

exports(isUStyleable).as('/Framework/V1.0/TypeChecks/isUStyleable');

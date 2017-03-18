
//Constants
import isInstance from '/Framework/V1.0/Constants/Keys/TypeChecks/Styleable/isInstance';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isStyleable(u) {
	return !!u[isInstance];
}

exports(isStyleable).as('/Framework/V1.0/TypeChecks/isStyleable');

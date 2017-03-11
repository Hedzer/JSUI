
//Classes
import Feature from '/Framework/V1.0/Classes/Core/Feature';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUFeature(u) {
	return isUOfType(u, Feature);
}

exports(isUFeature).as('/Framework/V1.0/TypeChecks/isUFeature');

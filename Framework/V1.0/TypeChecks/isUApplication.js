
//Classes
import Application from '/Framework/V1.0/Classes/Core/Application';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUApplication(u) {
	return isUOfType(u, Application);
}

exports(isUApplication).as('/Framework/V1.0/TypeChecks/isUApplication');


//Classes
import Application from '/JSUI/Source/V1.0/Classes/Core/Application';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/JSUI/Source/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUApplication(u) {
	return isUOfType(u, Application);
}

exports(isUApplication).as('/JSUI/Source/V1.0/TypeChecks/isUApplication');

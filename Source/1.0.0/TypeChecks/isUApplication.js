
//Classes
import Application from '/JSUI/Source/1.0.0/Classes/Core/Application';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';
import isUOfType from '/JSUI/Source/1.0.0/Utilities/TypeChecks/isUOfType';

export default function isUApplication(u) {
	return isUOfType(u, Application);
}

exports(isUApplication).as('/JSUI/Source/1.0.0/TypeChecks/isUApplication');

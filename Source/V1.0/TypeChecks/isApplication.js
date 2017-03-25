
//Classes
import Application from '/JSUI/Source/V1.0/Classes/Core/Application';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

function isApplication(u) {
	return (u instanceof Application);
}

export default isApplication;

exports(isApplication).as('/JSUI/Source/V1.0/TypeChecks/isApplication');

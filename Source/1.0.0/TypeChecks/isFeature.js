
//Classes
import Feature from '/JSUI/Source/1.0.0/Classes/Core/Feature';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

function isFeature(u) {
	return (u instanceof Feature);
}

export default isFeature;

exports(isFeature).as('/JSUI/Source/1.0.0/TypeChecks/isFeature');

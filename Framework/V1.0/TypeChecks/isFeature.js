
//Classes
import Feature from '/Framework/V1.0/Classes/Core/Feature';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

function isFeature(u) {
	return (u instanceof Feature);
}

export default isFeature;

exports(isFeature).as('/Framework/V1.0/TypeChecks/isFeature');

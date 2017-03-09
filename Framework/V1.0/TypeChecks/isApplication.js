import Application from '/Framework/V1.0/Classes/Core/Application';
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

function isApplication(u) {
	return (u instanceof Application);
}

export default isApplication;

exports(isApplication).as('/Framework/V1.0/TypeChecks/isApplication');
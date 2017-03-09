import Application from '/Framework/V1.0/Classes/Core/Application';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isUApplication(u) {
	return isUOfType(u, Application);
}
exports(isUApplication).as('/Framework/V1.0/TypeChecks/isUApplication');
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';
import Application from '/Framework/V1.0/Classes/Core/Application';

export default function isUApplication(u) {
	return isUOfType(u, Application);
}
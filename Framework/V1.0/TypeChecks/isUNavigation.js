import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';
import Navigation from '/Framework/V1.0/Classes/Core/Navigation';

export default function isUNavigation(u) {
	return isUOfType(u, Navigation);
}
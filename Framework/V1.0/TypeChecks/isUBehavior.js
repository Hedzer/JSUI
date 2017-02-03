import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';
import Behavior from '/Framework/V1.0/Classes/Behavior';

export default function isUBehavior(u) {
	return isUOfType(u, Behavior);
}
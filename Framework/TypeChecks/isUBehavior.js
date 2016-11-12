import isUOfType from 'Framework/Utilities/TypeChecks/isUOfType';
import Behavior from 'Framework/Classes/Behavior';

export default function isUBehavior(u) {
	return isUOfType(u, Behavior);
}
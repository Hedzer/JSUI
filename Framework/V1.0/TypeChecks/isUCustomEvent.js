import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUCustomEvent(u) {
	return isUOfType(u, CustomEvent);
}
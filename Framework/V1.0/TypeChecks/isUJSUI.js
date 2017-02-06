import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';
import Element from '/Framework/V1.0/Classes/Core/Element';

export default function isUJSUI(u) {
	return isUOfType(u, Element);
}
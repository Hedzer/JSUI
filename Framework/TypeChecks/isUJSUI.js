import isUOfType from 'Framework/Utilities/TypeChecks/isUOfType';
import Element from 'Framework/Classes/Element';

export default function isUJSUI(u) {
	return isUOfType(u, Element);
}
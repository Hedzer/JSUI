import isUOfType from 'Framework/Utilities/TypeChecks/isUOfType';
import StyleSheetRule from 'Framework/Classes/StyleSheetRule';

export default function isUStyleSheetRule(u) {
	return isUOfType(u, StyleSheetRule);
}
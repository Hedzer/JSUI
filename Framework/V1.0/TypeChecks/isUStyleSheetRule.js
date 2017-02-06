import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';
import StyleSheetRule from '/Framework/V1.0/Classes/Style/SheetRule';

export default function isUStyleSheetRule(u) {
	return isUOfType(u, StyleSheetRule);
}
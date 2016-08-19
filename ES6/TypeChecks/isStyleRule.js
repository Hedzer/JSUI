import StyleSheetRule from '../Classes/StyleSheetRule';

export function isStyleRule(u) {
	return (u instanceof StyleSheetRule);
}
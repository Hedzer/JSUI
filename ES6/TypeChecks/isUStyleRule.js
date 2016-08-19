import StyleSheetRule from '../Classes/StyleSheetRule';

export function isUStyleRule(u) {
	return (u.prototype instanceof StyleSheetRule);
}
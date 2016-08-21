import StyleSheetRule from '../Classes/StyleSheetRule';

export default function isUStyleRule(u) {
	return (u.prototype instanceof StyleSheetRule);
}
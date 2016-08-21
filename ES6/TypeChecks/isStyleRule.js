import StyleSheetRule from '../Classes/StyleSheetRule';

export default function isStyleRule(u) {
	return (u instanceof StyleSheetRule);
}
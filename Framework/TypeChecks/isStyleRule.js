import StyleSheetRule from '/Framework/Classes/StyleSheetRule';

export default function isStyleRule(u) {
	return (u instanceof StyleSheetRule);
}
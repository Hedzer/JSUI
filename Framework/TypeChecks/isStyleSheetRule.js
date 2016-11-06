import StyleSheetRule from 'Framework/Classes/StyleSheetRule';

export default function isStyleSheetRule(u) {
	return (u instanceof StyleSheetRule);
}
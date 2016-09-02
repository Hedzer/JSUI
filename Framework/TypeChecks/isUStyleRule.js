import StyleSheetRule from '/Framework/Classes/StyleSheetRule';

export default function isUStyleRule(u) {
	return !!(u && u.prototype && (u.prototype instanceof StyleSheetRule || u === StyleSheetRule));
}
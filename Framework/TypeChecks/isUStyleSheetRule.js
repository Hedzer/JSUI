import StyleSheetRule from 'Framework/Classes/StyleSheetRule';

export default function isUStyleSheetRule(u) {
	return !!(u && u.prototype && (u.prototype instanceof StyleSheetRule || u === StyleSheetRule));
}
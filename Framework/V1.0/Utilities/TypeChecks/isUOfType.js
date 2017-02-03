export default function isUStyleSheetRule(u, t) {
	return !!(u && u.prototype && (u.prototype instanceof t || u === t));
}
import Element from '/Framework/Classes/Element';

export default function isUJSUI(u) {
	return !!(u && u.prototype && (u.prototype instanceof Element || u === Element) );
}
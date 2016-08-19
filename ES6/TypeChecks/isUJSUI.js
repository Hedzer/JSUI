import Element from '../Classes/Element';

export function isUJSUI(u) {
	return (u.prototype instanceof Element);
}
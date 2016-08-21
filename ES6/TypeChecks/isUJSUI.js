import Element from '../Classes/Element';

export default function isUJSUI(u) {
	return (u.prototype instanceof Element);
}
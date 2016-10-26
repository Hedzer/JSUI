import isEmptyString from 'Framework/TypeChecks/isEmptyString';
import { default as ElementClassReceipt } from 'Framework/Classes/ElementClassReceipt';

export default function _string(name) {
	if (isEmptyString(name)) { return; }
	return new ElementClassReceipt(this.element, name);
}
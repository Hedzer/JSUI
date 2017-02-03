import isEmptyString from '/Framework/V1.0/TypeChecks/isEmptyString';
import ElementClassReceipt from '/Framework/V1.0/Classes/ElementClassReceipt';

export default function _string(name) {
	if (isEmptyString(name)) { return; }
	return new ElementClassReceipt(this.element, name);
}
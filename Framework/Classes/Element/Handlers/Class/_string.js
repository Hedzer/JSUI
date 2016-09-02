import isEmptyString from '/Framework/TypeChecks/isEmptyString';
import { default as ElementClassAction } from '/Framework/Classes/ElementClassAction';

export default function _string(name) {
	if (isEmptyString(name)) {return; }
	return new ElementClassAction(this.element, name);
}
import isUndefined from '../../../../../TypeChecks/isUndefined';
import isNull from '../../../../../TypeChecks/isNull';

export default function _set_string(name, value) {
	if (isUndefined(value) || isNull(value)) {
		this.element.removeAttribute(name);
		return true;
	}
	this.element.setAttribute(name, value);
	return true;
}
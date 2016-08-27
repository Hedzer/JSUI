import isEmptyString from '../../../../TypeChecks/isEmptyString';
import { default as ElementClassAction } from '../../../ElementClassAction';

export default function _string(name) {
	if (isEmptyString(name)) {return; }
	return new ElementClassAction(this.element, name);
}
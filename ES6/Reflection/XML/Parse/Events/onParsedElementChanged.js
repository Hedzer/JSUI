import isFunction from '../../../../TypeChecks/isFunction';
import isObject from '../../../../TypeChecks/isObject';

export function onParsedElementChanged(ev) {
	var data = (ev ? ev.detail : false);
	if (data) {
		var owner = data.owner;
		var attribute = data.property;
		var value = data.new;
		if (owner && owner.element && isFunction(owner.element.getAttribute)) {
			owner.element.getAttribute(attribute, (isObject(value) ? JSON.stringify(value) : value));
		}							
	}
}
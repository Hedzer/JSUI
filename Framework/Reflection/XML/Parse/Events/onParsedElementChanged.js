import isFunction from 'Framework/TypeChecks/isFunction';
import isObject from 'Framework/TypeChecks/isObject';

export default function onParsedElementChanged(ev) {
	let data = (ev ? ev.detail : false);
	if (data) {
		let owner = data.owner;
		let attribute = data.property;
		let value = data.new;
		if (owner && owner.element && isFunction(owner.element.getAttribute)) {
			owner.element.getAttribute(attribute, (isObject(value) ? JSON.stringify(value) : value));
		}							
	}
}
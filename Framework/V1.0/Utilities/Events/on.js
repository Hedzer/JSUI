import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isElement from '/Framework/V1.0/TypeChecks/isElement';
import dispatch from '/Framework/V1.0/Utilities/Events/dispatch';
import OnEventBoundReceipt from '/Framework/V1.0/Classes/OnEventBoundReceipt';
import JSUIFunction from '/Framework/V1.0/Classes/JSUIFunction';

import $private from '/Framework/V1.0/Constants/Keys/General/private';

export default function on(name, method) {
	if (!isFunction(method)) { return; }
	method = new JSUIFunction(method);
	let events = this[$private].events;
	let dispatchers = this[$private].dispatchers;
	let pool = events[name];
	if (!pool){
		events[name] = {};
		pool = events[name];
		let dispatcher = dispatch.bind(this, this, pool);
		dispatchers[name] = new JSUIFunction(dispatcher);
		let element = this.element;
		if (isElement(element)) {
			element.addEventListener(name, dispatcher, false);
		}
	}
	let receipt = new OnEventBoundReceipt(pool);
	receipt.uid = method.uid;
	pool[method.uid] = method;
	return receipt;
}
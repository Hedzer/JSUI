import isFunction from 'Framework/TypeChecks/isFunction';
import isElement from 'Framework/TypeChecks/isElement';
import dispatch from 'Framework/Utilities/Events/dispatch';
import { default as OnEventBoundReceipt } from 'Framework/Classes/OnEventBoundReceipt';
import { default as JSUIFunction } from 'Framework/Classes/JSUIFunction';

import $private from 'Framework/Constants/Keys/General/private';

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
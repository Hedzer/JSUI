import isFunction from 'Framework/TypeChecks/isFunction';
import isElement from 'Framework/TypeChecks/isElement';
import { default as OnEventBoundReceipt } from 'Framework/Classes/OnEventBoundReceipt';
import { default as JSUIFunction } from 'Framework/Classes/JSUIFunction';

import $private from 'Framework/Constants/Symbols/General/private';

export default function on(name, method) {
	if (!isFunction(method)) { return; }
	method = new JSUIFunction(method);
	let events = this[$private].events;
	let hooks = this[$private].hooks;
	let pool = events[name];
	if (!pool){
		events[name] = {};
		pool = events[name];
		function dispatcher() {
			let args = arguments;
			Object.keys(pool).forEach((uid) => {
				let method = pool[uid];
				method.apply(this, args);
			});
		};
		hooks[name] = dispatcher;
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
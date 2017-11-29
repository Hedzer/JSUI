
//Classes
let JSUIFunction; //import JSUIFunction from 'JSUI/Source/1.0.0/Classes/Core/Function';
import OnEventBoundReceipt from 'JSUI/Source/1.0.0/Classes/Receipts/OnEventBound';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';

//TypeChecks
import isDOM from 'JSUI/Source/1.0.0/TypeChecks/isDOM';
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';

//Utilities
import dispatch from 'JSUI/Source/1.0.0/Utilities/Events/dispatch';
import exports from 'Parcello/exports';
import imports from 'Parcello/imports';

export default function on(name, method) {

	// lazy import, due to circular issues
	JSUIFunction = JSUIFunction || imports('JSUI/Source/1.0.0/Classes/Core/Function');

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
		if (isDOM(element)) {
			element.addEventListener(name, dispatcher, false);
		}
	}
	let receipt = new OnEventBoundReceipt(pool);
	receipt.uid = method.uid;
	pool[method.uid] = method;
	return receipt;
}

exports(on).as('JSUI/Source/1.0.0/Utilities/Events/on');

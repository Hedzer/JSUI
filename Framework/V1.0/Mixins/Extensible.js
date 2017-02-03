import isString from '/Framework/V1.0/TypeChecks/isString';
import isArray from '/Framework/V1.0/TypeChecks/isArray';
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isJSUIFunction from '/Framework/V1.0/TypeChecks/isJSUIFunction';
import isExecutable from '/Framework/V1.0/TypeChecks/isExecutable';
import isObject from '/Framework/V1.0/TypeChecks/isObject';
import uid from '/Framework/V1.0/Utilities/General/uid';
import onEvent from '/Framework/V1.0/Utilities/Events/on';
import StateChangeReceipt from '/Framework/V1.0/Classes/StateChangeReceipt';

//Keys
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import state from '/Framework/V1.0/Constants/Keys/General/state';
import destructor from '/Framework/V1.0/Constants/Keys/General/destructor';

import on from '/Framework/V1.0/Constants/Keys/Extensible/on';
import trigger from '/Framework/V1.0/Constants/Keys/Extensible/trigger';
import add from '/Framework/V1.0/Constants/Keys/Extensible/add';
import remove from '/Framework/V1.0/Constants/Keys/Extensible/remove';

import instanceTypeCheck from '/Framework/V1.0/Constants/Keys/Mixins/Routable/isInstance';
import staticTypeCheck from '/Framework/V1.0/Constants/Keys/Mixins/Routable/isStatic';

let Extensible = (descendant) => class ExtensibleMixin extends descendant {  
	constructor() {
		super();
		this[$private] = {
			events: {},
			dispatchers: {},
			state: {}
		};
	}
	[state](property, value) {
		
		let old = this[$private].state[property];
		if (arguments.length === 1) {
			return old;
		}

		let hasChanged = (old !== value);

		if (hasChanged) {
			this[$private].state[property] = value;
			let data = new StateChangeReceipt({
				owner: this,
				property: property,
				old: old,
				new: value
			});
			this[trigger]([`${property}Changed`, 'Changed'], data);
		}

		return hasChanged;	
	}
	[on](name, method) {
		if (isString(name) && isFunction(method)) {
			return onEvent.call(this, name, method);
		}
	}
	[trigger](event, args) {
		if (isArray(event)) {
			let results = [];
			event.forEach((e) => {
				results.push(this[trigger](e, args));
			});
			return results;
		}

		let dispatchers = this[$private].dispatchers;
		let dispatcher = dispatchers[event];

		if (isExecutable(dispatcher)) {
			dispatcher.call(this, args);
		}

		let native = this[event];
		if (isExecutable(native)) {
			native.call(this, args);
		}
	}
	[add](item, value) {
		if (isString(item)) {
			addProperty(this, item);
			return;
		}

		if (isArray(item)) {
			item.forEach((key) => {
				this.add(key, value);
			});
			return;
		}

		if (isObject(item)) {
			Object.keys(item).forEach((key) => {
				this.add(key, item[key]);
			});
		}
	}
	[remove](item) {
		if (isString(item)) {
			delete this[item];
			return;
		}

		if (isArray(item)) {
			item.forEach((value) => {
				this.remove(value);
			});
		}
	}
	[destructor]() {

		let handle = setTimeout(() => {
			//destory these keys
			Object.keys(this).forEach((key) => {
				delete this[key];
			});

			//destroy private data
			let $private = this[$private];
			Object.keys($private).forEach((key) => {
				delete $private[key];
			});
		}, 0);
		this[trigger]('destructed');
		return handle;
	}
	get [instanceTypeCheck]() {
		return true;
	}
	static get [staticTypeCheck]() {
		return true;
	}
	toJSON() {
		return this[$private].state;
	}
};

export default Extensible;
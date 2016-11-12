import isString from 'Framework/TypeChecks/isString';
import isArray from 'Framework/TypeChecks/isArray';
import isFunction from 'Framework/TypeChecks/isFunction';
import isObject from 'Framework/TypeChecks/isObject';
import uid from 'Framework/Utilities/General/uid';
import onEvent from 'Framework/Utilities/Events/on';
import constructor from 'Framework/Classes/Extensible/constructor';

//symbols
import $private from 'Framework/Constants/Symbols/General/private';
import state from 'Framework/Constants/Symbols/General/state';
import destructor from 'Framework/Constants/Symbols/General/destructor';

import on from 'Framework/Constants/Symbols/Extensible/on';
import trigger from 'Framework/Constants/Symbols/Extensible/trigger';
import add from 'Framework/Constants/Symbols/Extensible/add';
import remove from 'Framework/Constants/Symbols/Extensible/remove';

let Extensible = (descendant) => class ExtensibleMixin extends descendant {  
	constructor() {
		super();
		constructor.call(this);
	}
	[state](property, value) {
		let old = this[$private].state[property];
		if (arguments.length === 1) {
			return old;
		}

		let hasChanged = (old !== value);

		if (hasChanged) {
			this[$private].state[property] = value;
			let data = {
				owner: this,
				property: property,
				old: old,
				new: value
			};
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

		let hooks = this[$private].hooks;
		let hook = hooks[event];
		if (isFunction(hook)) {
			return hook(args);
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
		Object.keys(this).forEach((key) => {
			delete this[key];
		});
	}
};

export default Extensible;
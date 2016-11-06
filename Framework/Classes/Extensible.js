import isString from 'Framework/TypeChecks/isString';
import isArray from 'Framework/TypeChecks/isArray';
import isFunction from 'Framework/TypeChecks/isFunction';
import isObject from 'Framework/TypeChecks/isObject';
import { default as addProperty } from 'Framework/Utilities/Properties/add';
import { default as removeEvent } from 'Framework/Utilities/Events/remove';
import { default as removeAllEvents } from 'Framework/Utilities/Events/removeAll';
import uid from 'Framework/Utilities/General/uid';
import constructor from 'Framework/Classes/Extensible/constructor';

export default class Extensible {
	constructor() {
		constructor.call(this);
	}
	add(item, value) {
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
	remove(item) {
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
	state(property, value) {
		let old = this.private.state[property];
		if (arguments.length === 1) {
			return old;
		}

		let hasChanged = (old !== value);

		if (hasChanged) {
			this.private.state[property] = value;
			let data = {
				property: property,
				old: old,
				new: value
			};
			this.trigger([`${property}Changed`, 'Changed'], data);
		}

		return hasChanged;	
	}
	on(name, method) {
		if (isString(name) && isFunction(method)) {
			let events = this.private.events;
			let hooks = this.private.hooks;
			let pool = events[name];
			let self = this;
			if (!pool){
				events[name] = {};
				pool = events[name];
				function hook() {
					let args = arguments;
					Object.keys(pool).forEach(function(id) {
						let method = pool[id];
						method.apply(self, args);
					});
				};
				hooks[name] = hook;
			}
			let eid = uid();
			if (typeof method === 'function'){
				pool[eid] = method;
			}
			let handle = {
				id: eid,
				pool: pool,
				remove: removeEvent,
				removeAll: removeAllEvents
			};
			return handle;
		}
	}
	trigger(event, args) {

		if (isArray(event)) {
			let results = [];
			event.forEach((e) => {
				results.push(this.trigger(e, args));
			});
			return results;
		}

		let hooks = this.private.hooks;
		let hook = hooks[event];
		if (isFunction(hook)) {
			hook(args);
		}
	}
	destructor() {
		for (let key in this) {
			delete this[key];
		}
	}
}
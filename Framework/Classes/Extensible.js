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
	on(name, method) {
		if (isString(name) && isFunction(method)) {
			var events = this.private.events;
			var hooks = this.private.hooks;
			var pool = events[name];
			var self = this;
			if (!pool){
				events[name] = {};
				pool = events[name];
				function hook() {
					var args = arguments;
					Object.keys(pool).forEach(function(id) {
						var method = pool[id];
						method.apply(self, args);
					});
				};
				hooks[name] = hook;
			}
			if (typeof method === 'function'){
				var eid = uid();
				pool[eid] = method;
			}
			var handle = {
				id: eid,
				pool: pool,
				remove: removeEvent,
				removeAll: removeAllEvents
			};
			return handle;
		}
	}
	trigger(event, args) {
		var hooks = this.private.hooks;
		var hook = hooks[event];
		if (isFunction(hook)) {
			hook(args);
		}
	}
	destructor() {
		for (var key in this) {
			delete this[key];
		}
	}
}
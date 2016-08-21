import isString from '../TypeChecks/isString';
import isArray from '../TypeChecks/isArray';
import isFunction from '../TypeChecks/isFunction';
import isObject from '../TypeChecks/isObject';
import { default as addProperty } from '../Utilities/Properties/add';
import { default as removeEvent } from '../Utilities/Events/remove';
import { default as removeAllEvents } from '../Utilities/Events/removeAll';
import uid from '../Utilities/General/uid';

export default class Extensible {
	constructor() {
		this.private = {
			Events:{},
			Hooks:{}
		};
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
			var events = ((this.private || {}).Events || {});
			var hooks = ((this.private || {}).Hooks || {});
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
		var hooks = ((this.private || {}).Hooks || {});
		var hook = hooks[event];
		if (isFunction(hook)) {
			hook(args);
		}
	}
	destructor() {
		Object.keys(this).forEach((key) => {
			delete this[key];
		});
	}
}
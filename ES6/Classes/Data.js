import isFunction from '../TypeChecks/isFunction';
import isString from '../TypeChecks/isString';
import uid from '../Utilities/General/uid';
import { default as removeEvent } from '../Utilities/Events/remove';
import { default as removeAllEvents } from '../Utilities/Events/removeAll';
import { default as constructor } from './Data/constructor';

class Data {
	constructor() {
		constructor.call(this);
	}
}

function $define(name, value) {
	Object.defineProperty(Data.prototype, name, {
		configurable:true,
		enumerable:false,
		writable: true,
		value: value
	});
}

$define('$on', function $on(name, method) {
	if (isString(name) && isFunction(method)) {
		var events = this.$private.Events;
		var hooks = this.$private.Hooks;
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
		if (isFunction(method)){
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
});
$define('$trigger', function $trigger(event, args) {
	var hooks = this.$private.Hooks;
	var hook = hooks[event];
	if (isFunction(hook)) {
		hook(args);
	}
});
$define('$destructor', function $destructor() {
	for (var key in this) {
		delete this[key];
	}
});

export default Data;
import isFunction from '/Framework/TypeChecks/isFunction';
import isString from '/Framework/TypeChecks/isString';
import uid from '/Framework/Utilities/General/uid';
import { default as removeEvent } from '/Framework/Utilities/Events/remove';
import { default as removeAllEvents } from '/Framework/Utilities/Events/removeAll';
import { default as constructor } from '/Framework/Classes/Data/constructor';

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
		var events = this.$private.events;
		var hooks = this.$private.hooks;
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
	var hooks = this.$private.hooks;
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
$define('$bind', function $bind(event) {

});
//$bind('textChanged').to(element).on()

export default Data;
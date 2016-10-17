import isFunction from 'Framework/TypeChecks/isFunction';
import isArray from 'Framework/TypeChecks/isArray';
import isString from 'Framework/TypeChecks/isString';
import uid from 'Framework/Utilities/General/uid';
import { default as removeEvent } from 'Framework/Utilities/Events/remove';
import { default as removeAllEvents } from 'Framework/Utilities/Events/removeAll';
import { default as constructor } from 'Framework/Classes/Data/constructor';

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
		let events = this.$private.events;
		let hooks = this.$private.hooks;
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
		if (isFunction(method)){
			let eid = uid();
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
});
$define('$trigger', function $trigger(event, args) {
	if (isArray(event)) {
		let results = [];
		event.forEach((e) => {
			results.push(this.$trigger(e, args));
		});
		return results;
	}
	let hooks = this.$private.hooks;
	let hook = hooks[event];
	if (isFunction(hook)) {
		hook(args);
	}
});
$define('$destructor', function $destructor() {
	for (let key in this) {
		delete this[key];
	}
});
$define('$bind', function $bind(event) {

});
//$bind('textChanged').to(element).on()

export default Data;
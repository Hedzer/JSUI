import { default as removeEvents } from '../../../../Utilities/Events/remove';
import { default as removeAllEvents } from '../../../../Utilities/Events/removeAll';
import isFunction from '../../../../TypeChecks/isFunction';
import uid from '../../../../Utilities/General/uid';

export default function _string(name, method) {
	if (!isFunction(method)) {return; }
	var events = ((this.private || {}).Events || {});
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
		if (this.element) {
			this.element.addEventListener(name, hook, false);
		}
	}
	if (isFunction(method)){
		var eid = uid();
		pool[eid] = method;
	}
	var handle = {
		id: eid,
		pool: pool,
		remove: removeEvents,
		removeAll: removeAllEvents
	};
	return handle;
}
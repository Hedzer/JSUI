import isFunction from 'Framework/TypeChecks/isFunction';
import isElement from 'Framework/TypeChecks/isElement';
import uid from 'Framework/Utilities/General/uid';
import remove from 'Framework/Utilities/Events/remove';
import removeAll from 'Framework/Utilities/Events/removeAll';

export default function on(name, method) {
	if (!isFunction(method)) {return; }
	var events = this.private.events;
	var pool = events[name];
	var self = this;
	if (!pool){
		events[name] = {};
		pool = events[name];
		function dispatcher() {
			var args = arguments;
			Object.keys(pool).forEach((id) => {
				var method = pool[id];
				method.apply(this, args);
			});
		};
		var element = this.element;
		if (isElement(element)) {
			element.addEventListener(name, dispatcher, false);
		}
	}
	if (isFunction(method)){
		var eid = uid();
		pool[eid] = method;
	}
	var handle = {
		id: eid,
		pool: pool,
		remove: remove,
		removeAll: removeAll
	};
	return handle;
}
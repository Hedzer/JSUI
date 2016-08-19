import isFunction from '../../../TypeChecks/isFunction';
import uid from '../../../Utilities/General/uid';
import { remove as removeEvents } from '../../../Utilities/Events/remove';
import { removeAll as removeAllEvents } from '../../../Utilities/Events/removeAll';

function element_handler_on_array(collection, method){
	var results = [];
	collection.forEach((item) => {
		results.push(this.on(item, method));
	});
	return results;
}
function element_handler_on_object(assignments) {
	var results = {};
	Object.keys(assignments).forEach((name) => {
		var method = assignments[name];
		results[name] = this.on(name, method);
	});
	return results;
}
function element_handler_on_string(name, method) {
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
function element_handler_on_path(name, method) {
	return element_handler_on_string.call(this, name, method);
}

var On = {
	array: element_handler_on_array,
	object: element_handler_on_object,
	string: element_handler_on_string,
	path: element_handler_on_path
};

export default On;
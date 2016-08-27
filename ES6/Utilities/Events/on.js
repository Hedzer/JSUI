import isFunction from '../../TypeChecks/isFunction';
import isElement from '../../TypeChecks/isElement';
import uid from '../General/uid';
import remove from './remove';
import removeAll from './removeAll';

function hook(pool) {
	var args = arguments;
	Object.keys(pool).forEach((id) => {
		var method = pool[id];
		method.apply(this, args);
	});
};

export default function on(name, method) {
	if (!isFunction(method)) {return; }
	var events = ((this.private || {}).Events || {});
	var pool = events[name];
	var self = this;
	if (!pool){
		events[name] = {};
		pool = events[name];
		var dispatcher = hook.bind(this, pool);
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
import isFunction from 'Framework/TypeChecks/isFunction';
import isElement from 'Framework/TypeChecks/isElement';
import uid from 'Framework/Utilities/General/uid';
import remove from 'Framework/Utilities/Events/remove';
import removeAll from 'Framework/Utilities/Events/removeAll';

export default function on(name, method) {
	if (!isFunction(method)) { return; }
	let events = this.private.events;
	let pool = events[name];
	let self = this;
	if (!pool){
		events[name] = {};
		pool = events[name];
		function dispatcher() {
			let args = arguments;
			Object.keys(pool).forEach((id) => {
				let method = pool[id];
				method.apply(this, args);
			});
		};
		let element = this.element;
		if (isElement(element)) {
			element.addEventListener(name, dispatcher, false);
		}
	}
	let eid = uid();
	if (isFunction(method)){
		pool[eid] = method;
	}
	let handle = {
		id: eid,
		pool: pool,
		remove: remove,
		removeAll: removeAll
	};
	return handle;
}
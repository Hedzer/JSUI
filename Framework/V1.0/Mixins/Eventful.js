//typechecks
import isString from '/Framework/V1.0/TypeChecks/isString';
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isArray from '/Framework/V1.0/TypeChecks/isArray';
import isExecutable from '/Framework/V1.0/TypeChecks/isExecutable';

//keys
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import instanceTypeCheck from '/Framework/V1.0/Constants/Keys/Mixins/Eventful/isInstance';
import staticTypeCheck from '/Framework/V1.0/Constants/Keys/Mixins/Eventful/isStatic';

import on from '/Framework/V1.0/Constants/Keys/Eventful/on';
import trigger from '/Framework/V1.0/Constants/Keys/Eventful/trigger';

import onEvent from '/Framework/V1.0/Utilities/Events/on';

let Eventful = (descendant) => {

	class EventfulMixin extends descendant {
		constructor() {
			super();
			this[$private] = {
				events: {},
				dispatchers: {}
			};
		}
		[on](name, method) {
			if (isString(name) && isFunction(method)) {
				return onEvent.call(this, name, method);
			}
		}
		[trigger](event, args) {
			if (isArray(event)) {
				let results = [];
				event.forEach((e) => {
					results.push(this[trigger](e, args));
				});
				return results;
			}

			let dispatchers = this[$private].dispatchers;
			let dispatcher = dispatchers[event];

			if (isExecutable(dispatcher)) {
				dispatcher.call(this, args);
			}

			let native = this[event];
			if (isExecutable(native)) {
				native.call(this, args);
			}
		}
	};

	return EventfulMixin;
};


export default Eventful;
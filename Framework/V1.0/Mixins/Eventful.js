//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import isClass from '/Framework/V1.0/Constants/Keys/TypeChecks/Eventful/isStatic';
import isInstance from '/Framework/V1.0/Constants/Keys/TypeChecks/Eventful/isInstance';
import on from '/Framework/V1.0/Constants/Keys/Eventful/on';
import trigger from '/Framework/V1.0/Constants/Keys/Eventful/trigger';

//TypeChecks
import isString from '/Framework/V1.0/TypeChecks/isString';
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isArray from '/Framework/V1.0/TypeChecks/isArray';
import isExecutable from '/Framework/V1.0/TypeChecks/isExecutable';

//Utilities
import onEvent from '/Framework/V1.0/Utilities/Events/on';
import capitalize from '/Framework/V1.0/Utilities/Strings/capitalize';
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Eventful = (descendant) => {
	class EventfulMixin extends descendant {
		constructor() {
			super();
			this[$private] = {
				events: {},
				dispatchers: {},
			};
		}

		//methods
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

			event = capitalize(event);
			let native = this[`on${event}`];
			if (isExecutable(native)) {
				native.call(this, args);
			}
		}

		//type checks
		static get [isClass]() {
			return true;
		}
		get [isInstance]() {
			return true;
		}
	};

	return EventfulMixin;
};


export default Eventful;

exports(Eventful).as('/Framework/V1.0/Mixins/Eventful');
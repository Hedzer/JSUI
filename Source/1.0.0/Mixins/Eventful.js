//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';
import isClass from 'JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Eventful/isStatic';
import isInstance from 'JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Eventful/isInstance';
import on from 'JSUI/Source/1.0.0/Constants/Keys/Eventful/on';
import trigger from 'JSUI/Source/1.0.0/Constants/Keys/Eventful/trigger';

//TypeChecks
import isString from 'JSUI/Source/1.0.0/TypeChecks/isString';
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';
import isArray from 'JSUI/Source/1.0.0/TypeChecks/isArray';
import isExecutable from 'JSUI/Source/1.0.0/TypeChecks/isExecutable';

//Utilities
import onEvent from 'JSUI/Source/1.0.0/Utilities/Events/on';
import capitalize from 'JSUI/Source/1.0.0/Utilities/Strings/capitalize';
import exports from 'Parcello/exports';

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

Eventful.exposable = { on, trigger };

export default Eventful;

exports(Eventful).as('JSUI/Source/1.0.0/Mixins/Eventful');
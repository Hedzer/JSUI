
//Classes
import StateChangeReceipt from 'JSUI/Source/1.0.0/Classes/Receipts/StateChange';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';
import state from 'JSUI/Source/1.0.0/Constants/Keys/Stateful/state';
import trigger from 'JSUI/Source/1.0.0/Constants/Keys/Eventful/trigger';

//TypeChecks
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';
import isUndefined from 'JSUI/Source/1.0.0/TypeChecks/isUndefined';

//Utilities
import exports from 'Parcello/exports';

let Stateful = (descendant) => {

	class StatefulMixin extends descendant {
		constructor() {
			super();
			this[$private] = {
				state: {}
			};
		}

		//methods
		[state](property, value) {
			let count = arguments.length;
			if (count < 2) {
				return StatefulMixin.state(this, property);
			}
			return StatefulMixin.state(this, property, value);
		}

		//properties
		static state(context, property, value) {
			let state = context[$private].state;
			let current = state[property];
			let isDefault = false;

			let defaults = (context.constructor || this)[property];
			if (!isUndefined(defaults)) {
				isDefault = (current === defaults);
				current = (property in state ? current : defaults);
			}

			if (arguments.length === 2) {
				return current;
			}

			let hasChanged = (current !== value);

			if (hasChanged) {
				state[property] = value;

				let data = new StateChangeReceipt({
					isDefault: isDefault,
					new: value,
					old: current,
					owner: context,
					property: property,
				});

				if (!context[trigger]) { return hasChanged; }
				context[trigger]([`${property}Changed`, 'Changed'], data);
			}

			return hasChanged;
		}

	};

	return StatefulMixin;
};

Stateful.exposable = { state };

export default Stateful;

exports(Stateful).as('JSUI/Source/1.0.0/Mixins/Stateful');
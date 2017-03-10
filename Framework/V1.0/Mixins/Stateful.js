import state from '/Framework/V1.0/Constants/Keys/Stateful/state';
import StateChangeReceipt from '/Framework/V1.0/Classes/Receipts/StateChange';
import trigger from '/Framework/V1.0/Constants/Keys/Eventful/trigger';
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isUndefined from '/Framework/V1.0/TypeChecks/isUndefined';

let Stateful = (descendant) => {

	class StatefulMixin extends descendant {
		constructor() {
			super();
		}
		static state(context, property, value) {
			let state = context[$private].state;
			let old = state[property];
			let isDefault = false;

			let defaults = this[property];
			if (!isUndefined(defaults)) {
				isDefault = (old === defaults);
				old = defaults;
			}

			if (arguments.length === 2) {
				return old;
			}

			let hasChanged = (old !== value);

			if (hasChanged) {
				state[property] = value;

				let data = new StateChangeReceipt({
					isDefault: isDefault,
					new: value,
					old: old,
					owner: context,
					property: property,
				});

				if (!context[trigger]) { return hasChanged; }
				context[trigger]([`${property}Changed`, 'Changed'], data);
			}

			return hasChanged;
		}
		[state](property, value) {
			let count = arguments.length;
			if (count < 2) {
				return StatefulMixin.state(this, property);
			}
			return StatefulMixin.state(this, property, value);
		}
	};

	return StatefulMixin;
};


export default Stateful;
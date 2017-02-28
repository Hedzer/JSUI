import state from '/Framework/V1.0/Constants/Keys/General/state';
import StateChangeReceipt from '/Framework/V1.0/Classes/Receipts/StateChange';
import trigger from '/Framework/V1.0/Constants/Keys/Eventful/trigger';
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';

let Stateful = (descendant) => {

	class StatefulMixin extends descendant {
		constructor() {
			super();
		}
		static state(context, property, value) {
			let old = context[$private].state[property];
			if (arguments.length === 2) {
				return old;
			}

			let hasChanged = (old !== value);

			if (hasChanged) {
				context[$private].state[property] = value;
				let data = new StateChangeReceipt({
					owner: context,
					property: property,
					old: old,
					new: value
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
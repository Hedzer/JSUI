
//Classes
import StateChangeReceipt from '/Framework/V1.0/Classes/Receipts/StateChange';

//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import add from '/Framework/V1.0/Constants/Keys/Extensible/add';
import destructor from '/Framework/V1.0/Constants/Keys/General/destructor';
import isInstance from '/Framework/V1.0/Constants/Keys/TypeChecks/Extensible/isInstance';
import isClass from '/Framework/V1.0/Constants/Keys/TypeChecks/Extensible/isStatic';
import on from '/Framework/V1.0/Constants/Keys/Eventful/on';
import remove from '/Framework/V1.0/Constants/Keys/Extensible/remove';
import state from '/Framework/V1.0/Constants/Keys/Stateful/state';
import trigger from '/Framework/V1.0/Constants/Keys/Eventful/trigger';

//TypeChecks
import isArray from '/Framework/V1.0/TypeChecks/isArray';
import isObject from '/Framework/V1.0/TypeChecks/isObject';
import isString from '/Framework/V1.0/TypeChecks/isString';
import isUEventful from '/Framework/V1.0/TypeChecks/isUEventful';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import onEvent from '/Framework/V1.0/Utilities/Events/on';
import uid from '/Framework/V1.0/Utilities/General/uid';

let Extensible = (descendant) => {
	if (!isUEventful(descendant)) {
		//throw warning
	}
	class ExtensibleMixin extends descendant {  
		constructor() {
			super();
			this[$private] = {
				events: {},
				dispatchers: {},
				state: {},
			};
		}

		//methods
		[add](item, value) {

			if (isString(item)) {
				addProperty(this, item);
				return;
			}

			if (isArray(item)) {
				item.forEach((key) => {
					(this.add || this[add])(key, value);
				});
				return;
			}

			if (isObject(item)) {
				Object.keys(item).forEach((key) => {
					(this.add || this[add])(key, item[key]);
				});
				return;
			}
		}
		[destructor]() {

			let handle = setTimeout(() => {
				//destory these keys
				Object.keys(this).forEach((key) => {
					delete this[key];
				});

				//destroy private data
				let _private = this[$private];
				Object.keys(_private).forEach((key) => {
					delete _private[key];
				});
			}, 0);
			this[trigger]('destructed');
			return handle;
		}
		[remove](item) {
			if (isString(item)) {
				delete this[item];
				return;
			}

			if (isArray(item)) {
				item.forEach((value) => {
					this.remove(value);
				});
			}
		}
		static add(property, value) {
			if (isString(property)) {
				Object.defineProperty(this.prototype, property, {
					get: function() {
						let v = this[state](property);
						return (isUndefined(v) ? value : v);
					},
					set: function(v) {
						this[state](property, v);
					},
					configurable: true,
					enumerable: true,
				});
			}
		}

		//properties
		get [isInstance]() {
			return true;
		}
		static get [isClass]() {
			return true;
		}
	};

	return ExtensibleMixin;
}

Extensible.exposable = { add, destructor, remove };

export default Extensible;

exports(Extensible).as('/Framework/V1.0/Mixins/Extensible');
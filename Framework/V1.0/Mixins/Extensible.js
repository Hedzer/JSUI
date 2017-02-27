import isString from '/Framework/V1.0/TypeChecks/isString';
import isArray from '/Framework/V1.0/TypeChecks/isArray';
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isJSUIFunction from '/Framework/V1.0/TypeChecks/isJSUIFunction';
import isExecutable from '/Framework/V1.0/TypeChecks/isExecutable';
import isObject from '/Framework/V1.0/TypeChecks/isObject';
import isUEventful from '/Framework/V1.0/TypeChecks/isUEventful';
import uid from '/Framework/V1.0/Utilities/General/uid';
import onEvent from '/Framework/V1.0/Utilities/Events/on';
import StateChangeReceipt from '/Framework/V1.0/Classes/Receipts/StateChange';

//Keys
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import state from '/Framework/V1.0/Constants/Keys/General/state';
import destructor from '/Framework/V1.0/Constants/Keys/General/destructor';

import add from '/Framework/V1.0/Constants/Keys/Extensible/add';
import remove from '/Framework/V1.0/Constants/Keys/Extensible/remove';
import on from '/Framework/V1.0/Constants/Keys/Eventful/on';
import trigger from '/Framework/V1.0/Constants/Keys/Eventful/trigger';

import instanceTypeCheck from '/Framework/V1.0/Constants/Keys/Mixins/Extensible/isInstance';
import staticTypeCheck from '/Framework/V1.0/Constants/Keys/Mixins/Extensible/isStatic';

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
				state: {}
			};
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
					enumerable: true
				});
			}
		}
		[state](property, value) {
			
			let old = this[$private].state[property];
			if (arguments.length === 1) {
				return old;
			}

			let hasChanged = (old !== value);

			if (hasChanged) {
				this[$private].state[property] = value;
				let data = new StateChangeReceipt({
					owner: this,
					property: property,
					old: old,
					new: value
				});
				this[trigger]([`${property}Changed`, 'Changed'], data);
			}

			return hasChanged;	
		}
		[add](item, value) {
			if (isString(item)) {
				addProperty(this, item);
				return;
			}

			if (isArray(item)) {
				item.forEach((key) => {
					this.add(key, value);
				});
				return;
			}

			if (isObject(item)) {
				Object.keys(item).forEach((key) => {
					this.add(key, item[key]);
				});
			}
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
		get [instanceTypeCheck]() {
			return true;
		}
		static get [staticTypeCheck]() {
			return true;
		}
		toJSON() {
			return this[$private].state;
		}
	};

	return ExtensibleMixin;
}

export default Extensible;
import cleanName from '/Framework/V1.0/Utilities/Functions/cleanName';
import constructor from '/Framework/V1.0/Classes/Data/constructor';
import subconstructor from '/Framework/V1.0/Reflection/Data/constructor';
import isObject from '/Framework/V1.0/TypeChecks/isObject';
import Data from '/Framework/V1.0/Classes/Data';
import StateChangeReceipt from '/Framework/V1.0/Classes/StateChangeReceipt';
import feval from '/Framework/V1.0/Reflection/feval';

export default function create(name, json, namespace) {
	name = cleanName(name);
	namespace = (namespace || name);
	let Subclasses = {};
	let src = `
		return (function(name, namespace, structure, Data, Subclasses, constructor, subconstructor) {
			function ${name}() {
				constructor.call(this);
				subconstructor.call(this, name, namespace, Subclasses);
			}
			${name}.prototype = Object.create(Data.prototype);
			${name}.constructor = ${name};
			${name}.prototype.toJSON = function toJSON() {
				let self = this;
				let copy = {};
				Object.keys(structure).forEach(function(key) {
					copy[key] = self[key];
				});
				return copy;
			};
			return ${name};
		})
	`;
	let DataClass = feval.call(window, src)(name, namespace, json, Data, Subclasses, constructor, subconstructor);
	Object.keys(json).forEach((key) => {
		let value = json[key];
		if (isObject(value)) {
			Subclasses[key] = create(key, value, `${name}.${key}`);
			return;
		}
		Object.defineProperty(DataClass.prototype, key, {
			get:function() {
				let state = this.$private.state;
				if (!state.hasOwnProperty(key)) {
					return value;
				}
				return this.$private.state[key];
			},
			set:function(v) {
				let state = this.$private.state;
				if (state) {
					let old = state[key];
					state[key] = v;
					if (old !== v){

						let data = new StateChangeReceipt({
							owner: this,
							property: key,
							old: old,
							new: v
						});

						let trigger = state.$trigger;
						if (!trigger) {
							trigger = this.$trigger.bind(this);
							state.$trigger = trigger;
						}
						
						if (trigger){
							trigger([`${key}Changed`, 'Changed'], data);
						}
					}
					return;				
				}
			},
			configurable:true,
			enumerable:true
		});
	});
	return DataClass;
}
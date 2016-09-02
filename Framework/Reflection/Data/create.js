import { default as cleanName } from '/Framework/Utilities/Functions/cleanName';
import { default as constructor } from '/Framework/Classes/Data/constructor';
import { default as subconstructor } from '/Framework/Reflection/Data/constructor';
import isObject from '/Framework/TypeChecks/isObject';
import { default as Data } from '/Framework/Classes/Data';
import feval from '/Framework/Reflection/feval';

export default function create(name, json, namespace) {
	name = cleanName(name);
	namespace = (namespace || name);
	var Subclasses = {};
	var src = `
		return (function(name, namespace, structure, Data, Subclasses, constructor, subconstructor) {
			function ${name}() {
				constructor.call(this);
				subconstructor.call(this, name, namespace, Subclasses);
			}
			${name}.prototype = Object.create(Data.prototype);
			${name}.constructor = ${name};
			${name}.prototype.toJSON = function toJSON() {
				var self = this;
				var copy = {};
				Object.keys(structure).forEach(function(key) {
					console.log(key)
					copy[key] = self[key];
				});
				console.log(copy);
				return copy;
			};
			return ${name};
		})
	`;
	var DataClass = feval.call(window, src)(name, namespace, json, Data, Subclasses, constructor, subconstructor);
	Object.keys(json).forEach((key) => {
		var value = json[key];
		if (isObject(value)) {
			Subclasses[key] = create(key, value, `${name}.${key}`);
			return;
		}
		Object.defineProperty(DataClass.prototype, key, {
			get:function() {
				var state = this.$private.state;
				if (!state.hasOwnProperty(key)) {
					return value;
				}
				return this.$private.state[key];
			},
			set:function(v) {
				var state = this.$private.state;
				if (state) {
					var old = state[key];
					state[key] = v;
					if (old !== v){

						var data = {
							owner: this,
							property: key,
							old: old,
							new: v
						};

						var trigger = state.$trigger;
						if (!trigger) {
							trigger = this.$trigger.bind(this);
							state.$trigger = trigger;
						}
						
						if (trigger){
							trigger(`${key}Changed`, data);
							trigger('Changed', data);
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
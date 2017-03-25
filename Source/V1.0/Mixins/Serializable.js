
//Constants
import $private from '/JSUI/Source/V1.0/Constants/Keys/General/private';

//TypeChecks
import isObject from '/JSUI/Source/V1.0/TypeChecks/isObject';
import isString from '/JSUI/Source/V1.0/TypeChecks/isString';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

let Serializable = (descendant) => {
	//check if it's stateful, otherwise throw error
	class SerializableMixin extends descendant {
		constructor() {
			super();
		}
		fromJSON(json) {
			if (!isString(json) && !isObject(json)) {
				//throw error
				return false;
			}
			try {
				let value = (isObject(json) ? json : JSON.parse(json));
				if (!isObject(value)) {
					//throw error
					return false;
				}
				this[$private].state = value;
			} catch (err) {
				//throw error
				return false;
			}
			
		}
		toJSON() {
			return this[$private].state;
		}
	};
	return SerializableMixin;
};


export default Serializable;

exports(Serializable).as('/JSUI/Source/V1.0/Mixins/Serializable');
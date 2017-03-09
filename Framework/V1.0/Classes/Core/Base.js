
//TypeChecks
import isArray from '/Framework/V1.0/TypeChecks/isArray';
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isString from '/Framework/V1.0/TypeChecks/isString';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default class Base {
	//methods
	construct(name, args) {

		if (isArray(name)) {
			let results = {};
			name.forEach((constructor) => {
				if (!isString(constructor)) {
					//throw warn
					return;
				}
				results[constructor] = this.construct(constructor, args);
			});
			return results;
		}

		let constructor = `construct_${name}`;
		if (!isFunction(this[constructor])) {
			//throw warning
			return;
		}
		return this[constructor](args);
	}
	instantiate() {
		return this;
	}

	//static properties
	static implements() {
		if (!arguments.length) { /* throw error */ }
		let result = this;

		for (let i = 0; i < arguments.length; i++) {
			let mixin = arguments[i];
			result = mixin(result);
		}

		return result;
	}
	static instantiate() {
		return new this();
	}
}

exports(Base).as('/Framework/V1.0/Classes/Core/Base');


//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default class Base {
	//methods
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

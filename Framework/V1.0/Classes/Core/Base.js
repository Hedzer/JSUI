export default class Base {
	instantiate() {
		return this;
	}
	static instantiate() {
		return new this();
	}
	static implements() {
		if (!arguments.length) { /* throw error */ }
		let result = this;
		for (let i = 0; i < arguments.length; i++) {
			let mixin = arguments[i];
			result = mixin(result);
		}
		return result;
	}
}
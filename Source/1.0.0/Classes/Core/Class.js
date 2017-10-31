
//Constants
import exposable from 'JSUI/Source/1.0.0/Constants/Keys/General/exposable';

//TypeChecks
import isArray from 'JSUI/Source/1.0.0/TypeChecks/isArray';
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';
import isString from 'JSUI/Source/1.0.0/TypeChecks/isString';

//Utilities
import exports from 'Parcello/exports';

export default class Class {
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
	static exposes() {
		if (!arguments.length) { /* throw error */ }
		let result = this;

		for (let i = 0; i < arguments.length; i++) {
			let mixin = arguments[i];
			let exposes = mixin.exposable;
			if (!exposes) { continue; }
			Object.keys(exposes).forEach((key) => {
				let symbol = exposes[key];
				if (symbol in this.prototype) {
					let parent = Object.getPrototypeOf(this);
					let descriptor = false;
					while (!descriptor && parent) {
						descriptor = Object.getOwnPropertyDescriptor(parent.prototype, symbol);
						if (!descriptor) {
							parent = Object.getPrototypeOf(parent);
						}
					}
					if (descriptor) {
						Object.defineProperty(parent.prototype, key, descriptor);
					}
				}
				//add static descriptors
				if (symbol in this) {
					let parent = Object.getPrototypeOf(this);
					let descriptor = false;
					while (!descriptor && parent) {
						descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
						if (!descriptor) {
							parent = Object.getPrototypeOf(parent);
						}
						
					}
					Object.defineProperty(parent, key, descriptor);
				}
			});
		}

		return result;
	}
	static instantiate() {
		return new this();
	}
}

exports(Class).as('JSUI/Source/1.0.0/Classes/Core/Class');

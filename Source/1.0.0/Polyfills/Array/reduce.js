
//Utilities
import exports from 'Parcello/exports';

// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: http://es5.github.io/#x15.4.4.21
let hasReduce = !!Array.prototype.reduce;
if (!Array.prototype.reduce) {
	Array.prototype.reduce = function(callback /*, initialValue*/ ) {
		'use strict';
		if (this == null) {
			throw new TypeError('Array.prototype.reduce called on null or undefined');
		}
		if (typeof callback !== 'function') {
			throw new TypeError(callback + ' is not a function');
		}
		let t = Object(this),
			len = t.length >>> 0,
			k = 0,
			value;
		if (arguments.length == 2) {
			value = arguments[1];
		} else {
			while (k < len && !(k in t)) {
				k++;
			}
			if (k >= len) {
				throw new TypeError('Reduce of empty array with no initial value');
			}
			value = t[k++];
		}
		for (; k < len; k++) {
			if (k in t) {
				value = callback(value, t[k], k, t);
			}
		}
		return value;
	};
}

export default !hasReduce;

exports(!hasReduce).as('JSUI/Source/1.0.0/Polyfills/Array/reduce');

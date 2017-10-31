
//Constants
import dontEnums from 'JSUI/Source/1.0.0/Constants/JS/Object/properties';

//Utilities
import exports from 'Parcello/exports';

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
let hasObjectKeys = !!Object.keys;
if (!hasObjectKeys) {
	Object.keys = (function() {
		'use strict';
		let hasOwnProperty = Object.prototype.hasOwnProperty,
			hasDontEnumBug = !({
				toString: null
			}).propertyIsEnumerable('toString'),
			dontEnumsLength = dontEnums.length;

		return function(obj) {
			if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
				throw new TypeError('Object.keys called on non-object');
			}

			let result = [],
				prop, i;

			for (prop in obj) {
				if (hasOwnProperty.call(obj, prop)) {
					result.push(prop);
				}
			}

			if (hasDontEnumBug) {
				for (i = 0; i < dontEnumsLength; i++) {
					if (hasOwnProperty.call(obj, dontEnums[i])) {
						result.push(dontEnums[i]);
					}
				}
			}
			return result;
		};
	}());
}

export default !hasObjectKeys;

exports(!hasObjectKeys).as('JSUI/Source/1.0.0/Polyfills/Object/keys');

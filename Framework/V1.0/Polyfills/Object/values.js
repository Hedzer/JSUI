
//Constants
import dontEnums from '/Framework/V1.0/Constants/JS/Object/properties';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
let hasObjectValues = !!Object.values;
if (!hasObjectValues) {
	Object.values = (function() {
		'use strict';
		let hasOwnProperty = Object.prototype.hasOwnProperty,
			hasDontEnumBug = !({
				toString: null
			}).propertyIsEnumerable('toString'),
			dontEnumsLength = dontEnums.length;

		return function(obj) {
			if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
				throw new TypeError('Object.values called on non-object');
			}

			let result = [],
				prop, i;

			for (prop in obj) {
				if (hasOwnProperty.call(obj, prop)) {
					result.push(obj[prop]);
				}
			}

			if (hasDontEnumBug) {
				for (i = 0; i < dontEnumsLength; i++) {
					if (hasOwnProperty.call(obj, dontEnums[i])) {
						result.push(obj[dontEnums[i]]);
					}
				}
			}
			return result;
		};
	}());
}

export default !hasObjectValues;

exports(!hasObjectValues).as('/Framework/V1.0/Polyfills/Object/values');

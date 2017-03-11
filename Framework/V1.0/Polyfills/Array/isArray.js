
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let hasIsArray = !!Array.isArray;
if (!hasIsArray) {
	Array.isArray = function(arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	};
}

export default !hasIsArray;

exports(!hasIsArray).as('/Framework/V1.0/Polyfills/Array/isArray');
//Array
import forEach from '/Framework/Polyfills/Array/forEach';
import isArray from '/Framework/Polyfills/Array/isArray';
import map from '/Framework/Polyfills/Array/map';
import reduce from '/Framework/Polyfills/Array/reduce';

//Object
import keys from '/Framework/Polyfills/Object/keys';

var Polyfilled = {
	Array: {
		forEach: forEach,
		isArray: isArray,
		map: map,
		reduce: reduce
	},
	Object: {
		keys: keys
	}
};

export default Polyfilled;
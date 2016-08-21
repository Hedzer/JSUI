//Array
import forEach from '../Polyfills/Array/forEach';
import isArray from '../Polyfills/Array/isArray';
import map from '../Polyfills/Array/map';
import reduce from '../Polyfills/Array/reduce';

//Object
import keys from '../Polyfills/Object/keys';

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
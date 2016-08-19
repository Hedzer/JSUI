//Array
import forEach from './Array/forEach';
import isArray from './Array/isArray';
import map from './Array/map';
import reduce from './Array/reduce';

//Object
import keys from './Object/keys';

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
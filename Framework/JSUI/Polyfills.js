//Array
import forEach from 'Framework/Polyfills/Array/forEach';
import isArray from 'Framework/Polyfills/Array/isArray';
import map from 'Framework/Polyfills/Array/map';
import reduce from 'Framework/Polyfills/Array/reduce';

//Object
import keys from 'Framework/Polyfills/Object/keys';

//DOM
import CustomEvent from 'Framework/Polyfills/DOM/CustomEvent';
import addEventListener from 'Framework/Polyfills/DOM/addEventListener';

let Polyfilled = {
	Array: {
		forEach: forEach,
		isArray: isArray,
		map: map,
		reduce: reduce
	},
	Object: {
		keys: keys
	},
	DOM: {
		CustomEvent: CustomEvent,
		addEventListener: addEventListener
	}
};

export default Polyfilled;
//Array
import forEach from '/Framework/V1.0/Polyfills/Array/forEach';
import isArray from '/Framework/V1.0/Polyfills/Array/isArray';
import map from '/Framework/V1.0/Polyfills/Array/map';
import reduce from '/Framework/V1.0/Polyfills/Array/reduce';

//Object
import keys from '/Framework/V1.0/Polyfills/Object/keys';

//DOM
import CustomEvent from '/Framework/V1.0/Polyfills/DOM/CustomEvent';
import addEventListener from '/Framework/V1.0/Polyfills/DOM/addEventListener';

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
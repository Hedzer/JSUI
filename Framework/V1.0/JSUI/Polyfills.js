//Array
import forEach from '/Framework/V1.0/Polyfills/Array/forEach';
import isArray from '/Framework/V1.0/Polyfills/Array/isArray';
import map from '/Framework/V1.0/Polyfills/Array/map';
import reduce from '/Framework/V1.0/Polyfills/Array/reduce';
import arrayIncludes from '/Framework/V1.0/Polyfills/Array/includes';

//Object
import keys from '/Framework/V1.0/Polyfills/Object/keys';

//DOM
import CustomEvent from '/Framework/V1.0/Polyfills/DOM/CustomEvent';
import addEventListener from '/Framework/V1.0/Polyfills/DOM/addEventListener';

//Function
import name from '/Framework/V1.0/Polyfills/Function/name';

//String
import includes from '/Framework/V1.0/Polyfills/String/includes';

let Polyfilled = {
	Array: {
		forEach: forEach,
		isArray: isArray,
		map: map,
		reduce: reduce,
		includes: arrayIncludes
	},
	Object: {
		keys: keys
	},
	DOM: {
		CustomEvent: CustomEvent,
		addEventListener: addEventListener
	},
	Function: {
		name: name
	},
	String: {
		includes: includes
	}
};

export default Polyfilled;
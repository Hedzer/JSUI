
//Array Polyfills
import arrayIncludes from '/Framework/V1.0/Polyfills/Array/includes';
import forEach from '/Framework/V1.0/Polyfills/Array/forEach';
import isArray from '/Framework/V1.0/Polyfills/Array/isArray';
import map from '/Framework/V1.0/Polyfills/Array/map';
import reduce from '/Framework/V1.0/Polyfills/Array/reduce';

//Object Polyfills
import keys from '/Framework/V1.0/Polyfills/Object/keys';

//DOM Polyfills
import addEventListener from '/Framework/V1.0/Polyfills/DOM/addEventListener';
import CustomEvent from '/Framework/V1.0/Polyfills/DOM/CustomEvent';

//Function Polyfills
import name from '/Framework/V1.0/Polyfills/Function/name';

//String Polyfills
import includes from '/Framework/V1.0/Polyfills/String/includes';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Polyfilled = {
	Array: {
		forEach: forEach,
		includes: arrayIncludes,
		isArray: isArray,
		map: map,
		reduce: reduce,
	},
	Object: {
		keys: keys
	},
	DOM: {
		addEventListener: addEventListener,
		CustomEvent: CustomEvent,
	},
	Function: {
		name: name
	},
	String: {
		includes: includes
	}
};

export default Polyfilled;

exports(Polyfilled).as('/Framework/V1.0/JSUI/Polyfilled');

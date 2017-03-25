
//Array Polyfills
import arrayIncludes from '/JSUI/Source/V1.0/Polyfills/Array/includes';
import forEach from '/JSUI/Source/V1.0/Polyfills/Array/forEach';
import isArray from '/JSUI/Source/V1.0/Polyfills/Array/isArray';
import map from '/JSUI/Source/V1.0/Polyfills/Array/map';
import reduce from '/JSUI/Source/V1.0/Polyfills/Array/reduce';

//Object Polyfills
import keys from '/JSUI/Source/V1.0/Polyfills/Object/keys';

//DOM Polyfills
import addEventListener from '/JSUI/Source/V1.0/Polyfills/DOM/addEventListener';
import CustomEvent from '/JSUI/Source/V1.0/Polyfills/DOM/CustomEvent';

//Function Polyfills
import name from '/JSUI/Source/V1.0/Polyfills/Function/name';

//String Polyfills
import includes from '/JSUI/Source/V1.0/Polyfills/String/includes';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

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

exports(Polyfilled).as('/JSUI/Source/V1.0/JSUI/Polyfilled');

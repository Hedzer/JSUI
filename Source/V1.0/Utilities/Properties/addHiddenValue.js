
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function addHiddenValue(obj, prop, value) {
	Object.defineProperty(obj, prop, {
		configurable:true,
		enumerable:false,
		writable: true,
		value: value,
	});
}

exports(addHiddenValue).as('/JSUI/Source/V1.0/Utilities/Properties/addHiddenValue');
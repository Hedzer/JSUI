
//Utilities
import exports from 'Parcello/exports';

export default function addHiddenValue(obj, prop, value) {
	Object.defineProperty(obj, prop, {
		configurable:true,
		enumerable:false,
		writable: true,
		value: value,
	});
}

exports(addHiddenValue).as('JSUI/Source/1.0.0/Utilities/Properties/addHiddenValue');

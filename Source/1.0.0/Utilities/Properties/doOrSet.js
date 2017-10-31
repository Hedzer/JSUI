
//TypeChecks
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';

//Utilities
import exports from 'Parcello/exports';

export default function doOrSet(obj, prop, value) {
	if (obj.hasOwnProperty(prop)) {
		if (isFunction(obj[prop])) {
			obj[prop].apply(obj, value);
			return true;
		}
		obj[prop] = value;
		return true;
	}
	return false;
}

exports(doOrSet).as('JSUI/Source/1.0.0/Utilities/Properties/doOrSet');

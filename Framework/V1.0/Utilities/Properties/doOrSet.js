
//TypeChecks
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

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

exports(doOrSet).as('/Framework/V1.0/Utilities/Properties/doOrSet');


//TypeChecks
import isObject from 'JSUI/Source/1.0.0/TypeChecks/isObject';

//Utilities
import exports from 'Parcello/exports';

export default function getter(obj, prop) {
	if (!obj || !isObject(obj)) { return; }
	return obj[prop];
}

exports(getter).as('JSUI/Source/1.0.0/Utilities/Paths/getter');

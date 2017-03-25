
//Singletons
import exported from '/JSUI/Source/V1.0/Singletons/Dependencies/exported';

//TypeChecks
import isString from '/JSUI/Source/V1.0/TypeChecks/isString';

export default function exports(code) {
	if (arguments.length < 1) { return false; }
	return {
		as: (name) => {
			if (!isString(name)) { return false; }
			if (exported.hasOwnProperty(name)) {
				//throw warning
				return false;
			}
			exported[name] = code;
			return true;
		}
	};
}

exports(exports).as('/JSUI/Source/V1.0/Utilities/Dependencies/exports');

import exported from '/Framework/V1.0/Singletons/Dependencies/exported';
import isString from '/Framework/V1.0/TypeChecks/isString';

function exports(code) {
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
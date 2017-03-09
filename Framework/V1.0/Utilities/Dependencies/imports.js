import exported from '/Framework/V1.0/Singletons/Dependencies/exported';
import isString from '/Framework/V1.0/TypeChecks/isString';

function imports(dependency) {
	if (!isString(dependency)) { return false; }
	if (!exported.hasOwnProperty(dependency)) { return false; }
	return exported[dependency];
}

export default imports;
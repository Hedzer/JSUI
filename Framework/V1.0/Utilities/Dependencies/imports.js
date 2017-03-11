
//Singletons
import exported from '/Framework/V1.0/Singletons/Dependencies/exported';

//TypeChecks
import isString from '/Framework/V1.0/TypeChecks/isString';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

function imports(dependency) {
	if (!isString(dependency)) { return false; }
	if (!exported.hasOwnProperty(dependency)) { return false; }
	return exported[dependency];
}

export default imports;

exports(imports).as('/Framework/V1.0/Utilities/Dependencies/imports');

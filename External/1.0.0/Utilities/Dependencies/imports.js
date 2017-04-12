
//Singletons
import exported from '/JSUI/Source/1.0.0/Singletons/Dependencies/Exported';

//TypeChecks
import isString from '/JSUI/Source/1.0.0/TypeChecks/isString';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

function imports(dependency) {
	if (!isString(dependency)) { return false; }
	if (!exported.hasOwnProperty(dependency)) { return false; }
	return exported[dependency];
}

export default imports;

exports(imports).as('/JSUI/Source/1.0.0/Utilities/Dependencies/imports');

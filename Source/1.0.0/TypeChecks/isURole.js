
//Classes
import Role from '/JSUI/Source/1.0.0/Classes/Core/Role';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';
import isUOfType from '/JSUI/Source/1.0.0/Utilities/TypeChecks/isUOfType';

export default function isURole(u) {
	return isUOfType(u, Role);
}

exports(isURole).as('/JSUI/Source/1.0.0/TypeChecks/isURole');

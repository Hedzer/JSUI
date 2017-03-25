
//Classes
import Role from '/JSUI/Source/V1.0/Classes/Core/Role';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/JSUI/Source/V1.0/Utilities/TypeChecks/isUOfType';

export default function isURole(u) {
	return isUOfType(u, Role);
}

exports(isURole).as('/JSUI/Source/V1.0/TypeChecks/isURole');

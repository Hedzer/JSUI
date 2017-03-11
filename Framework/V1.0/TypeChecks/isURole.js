
//Classes
import Role from '/Framework/V1.0/Classes/Core/Role';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';

export default function isURole(u) {
	return isUOfType(u, Role);
}

exports(isURole).as('/Framework/V1.0/TypeChecks/isURole');

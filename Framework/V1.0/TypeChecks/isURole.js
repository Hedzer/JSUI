import Role from '/Framework/V1.0/Classes/Core/Role';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isURole(u) {
	return isUOfType(u, Role);
}

exports(isURole).as('/Framework/V1.0/TypeChecks/isURole');
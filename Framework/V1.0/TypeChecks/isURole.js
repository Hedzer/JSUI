import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';
import Role from '/Framework/V1.0/Classes/Core/Role';

export default function isURole(u) {
	return isUOfType(u, Role);
}
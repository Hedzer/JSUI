import isUOfType from 'Framework/Utilities/TypeChecks/isUOfType';
import Role from 'Framework/Classes/Role';

export default function isURole(u) {
	return isUOfType(u, Role);
}
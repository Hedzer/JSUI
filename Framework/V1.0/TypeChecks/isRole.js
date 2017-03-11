
//Classes
import Role from '/Framework/V1.0/Classes/Core/Role';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

function isRole(u) {
	return (u instanceof Role);
}

export default isRole;

exports(isRole).as('/Framework/V1.0/TypeChecks/isRole');

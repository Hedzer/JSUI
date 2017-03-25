
//Classes
import Role from '/JSUI/Source/V1.0/Classes/Core/Role';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

function isRole(u) {
	return (u instanceof Role);
}

export default isRole;

exports(isRole).as('/JSUI/Source/V1.0/TypeChecks/isRole');

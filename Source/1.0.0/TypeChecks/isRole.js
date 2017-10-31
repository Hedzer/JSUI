
//Classes
import Role from 'JSUI/Source/1.0.0/Classes/Core/Role';

//Utilities
import exports from 'Parcello/exports';

function isRole(u) {
	return (u instanceof Role);
}

export default isRole;

exports(isRole).as('JSUI/Source/1.0.0/TypeChecks/isRole');

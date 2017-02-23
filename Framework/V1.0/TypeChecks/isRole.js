import Role from '/Framework/V1.0/Classes/Core/Role';
import TypeChecks from '/Framework/V1.0/JSUI/TypeChecks';

function isRole(u) {
	return (u instanceof Role);
}

//registering manually to solve cyclic dependencies
TypeChecks.isRole = isRole;

export default isRole;
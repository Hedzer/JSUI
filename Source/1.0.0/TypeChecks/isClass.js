
//Classes
import Class from 'JSUI/Source/1.0.0/Classes/Core/Class';

//Utilities
import exports from 'Parcello/exports';

function isClass(u) {
	return (u instanceof Class);
}

export default isClass;

exports(isClass).as('JSUI/Source/1.0.0/TypeChecks/isClass');

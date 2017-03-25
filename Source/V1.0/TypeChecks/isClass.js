
//Classes
import Class from '/JSUI/Source/V1.0/Classes/Core/Class';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

function isClass(u) {
	return (u instanceof Class);
}

export default isClass;

exports(isClass).as('/JSUI/Source/V1.0/TypeChecks/isClass');

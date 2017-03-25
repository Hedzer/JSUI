
//Classes
import Class from '/JSUI/Source/V1.0/Classes/Core/Class';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/JSUI/Source/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUClass(u) {
	return isUOfType(u, Class);
}

exports(isUClass).as('/JSUI/Source/V1.0/TypeChecks/isUClass');


//Classes
import Class from '/Framework/V1.0/Classes/Core/Class';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUClass(u) {
	return isUOfType(u, Class);
}

exports(isUClass).as('/Framework/V1.0/TypeChecks/isUClass');

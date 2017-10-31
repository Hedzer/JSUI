
//Classes
import Class from 'JSUI/Source/1.0.0/Classes/Core/Class';

//Utilities
import exports from 'Parcello/exports';
import isUOfType from 'JSUI/Source/1.0.0/Utilities/TypeChecks/isUOfType';

export default function isUClass(u) {
	return isUOfType(u, Class);
}

exports(isUClass).as('JSUI/Source/1.0.0/TypeChecks/isUClass');

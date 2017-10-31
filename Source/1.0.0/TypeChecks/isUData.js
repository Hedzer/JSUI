
//Classes
import Data from 'JSUI/Source/1.0.0/Classes/Core/Data';

//Utilities
import exports from 'Parcello/exports';
import isUOfType from 'JSUI/Source/1.0.0/Utilities/TypeChecks/isUOfType';

export default function isUData(u) {
	return isUOfType(u, Data);
}

exports(isUData).as('JSUI/Source/1.0.0/TypeChecks/isUData');

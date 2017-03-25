
//Classes
import Data from '/JSUI/Source/V1.0/Classes/Core/Data';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/JSUI/Source/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUData(u) {
	return isUOfType(u, Data);
}

exports(isUData).as('/JSUI/Source/V1.0/TypeChecks/isUData');

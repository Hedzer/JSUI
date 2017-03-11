
//Classes
import Data from '/Framework/V1.0/Classes/Core/Data';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUData(u) {
	return isUOfType(u, Data);
}

exports(isUData).as('/Framework/V1.0/TypeChecks/isUData');

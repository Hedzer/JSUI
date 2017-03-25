
//Classes
import Data from '/JSUI/Source/V1.0/Classes/Core/Data';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isData(u) {
	return (u instanceof Data);
}

exports(isData).as('/JSUI/Source/V1.0/TypeChecks/isData');

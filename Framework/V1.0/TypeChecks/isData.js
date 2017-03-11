
//Classes
import Data from '/Framework/V1.0/Classes/Core/Data';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isData(u) {
	return (u instanceof Data);
}

exports(isData).as('/Framework/V1.0/TypeChecks/isData');

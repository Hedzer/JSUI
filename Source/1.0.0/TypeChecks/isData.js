
//Classes
import Data from 'JSUI/Source/1.0.0/Classes/Core/Data';

//Utilities
import exports from 'Parcello/exports';

export default function isData(u) {
	return (u instanceof Data);
}

exports(isData).as('JSUI/Source/1.0.0/TypeChecks/isData');

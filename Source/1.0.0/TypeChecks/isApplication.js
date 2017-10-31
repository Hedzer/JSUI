
//Classes
import Application from 'JSUI/Source/1.0.0/Classes/Core/Application';

//Utilities
import exports from 'Parcello/exports';

function isApplication(u) {
	return (u instanceof Application);
}

export default isApplication;

exports(isApplication).as('JSUI/Source/1.0.0/TypeChecks/isApplication');


//Classes
import Router from 'JSUI/Source/1.0.0/Classes/Core/Router';

//Utilities
import exports from 'Parcello/exports';

function isRouter(u) {
	return (u instanceof Router);
}

export default isRouter;

exports(isRouter).as('JSUI/Source/1.0.0/TypeChecks/isRouter');

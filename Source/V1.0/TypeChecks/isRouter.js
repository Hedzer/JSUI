
//Classes
import Router from '/JSUI/Source/V1.0/Classes/Core/Router';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

function isRouter(u) {
	return (u instanceof Router);
}

export default isRouter;

exports(isRouter).as('/JSUI/Source/V1.0/TypeChecks/isRouter');

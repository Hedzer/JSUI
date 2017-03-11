
//Classes
import Router from '/Framework/V1.0/Classes/Core/Router';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

function isRouter(u) {
	return (u instanceof Router);
}

export default isRouter;

exports(isRouter).as('/Framework/V1.0/TypeChecks/isRouter');

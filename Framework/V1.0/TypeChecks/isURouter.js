
//Classes
import Router from '/Framework/V1.0/Classes/Core/Router';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';

export default function isURouter(u) {
	return isUOfType(u, Router);
}

exports(isURouter).as('/Framework/V1.0/TypeChecks/isURouter');

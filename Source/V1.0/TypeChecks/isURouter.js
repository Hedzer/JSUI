
//Classes
import Router from '/JSUI/Source/V1.0/Classes/Core/Router';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/JSUI/Source/V1.0/Utilities/TypeChecks/isUOfType';

export default function isURouter(u) {
	return isUOfType(u, Router);
}

exports(isURouter).as('/JSUI/Source/V1.0/TypeChecks/isURouter');

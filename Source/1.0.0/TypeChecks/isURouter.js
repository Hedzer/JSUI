
//Classes
import Router from 'JSUI/Source/1.0.0/Classes/Core/Router';

//Utilities
import exports from 'Parcello/exports';
import isUOfType from 'JSUI/Source/1.0.0/Utilities/TypeChecks/isUOfType';

export default function isURouter(u) {
	return isUOfType(u, Router);
}

exports(isURouter).as('JSUI/Source/1.0.0/TypeChecks/isURouter');

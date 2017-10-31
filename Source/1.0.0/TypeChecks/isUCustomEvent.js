
//Utilities
import exports from 'Parcello/exports';
import isUOfType from 'JSUI/Source/1.0.0/Utilities/TypeChecks/isUOfType';

export default function isUCustomEvent(u) {
	return isUOfType(u, CustomEvent);
}

exports(isUCustomEvent).as('JSUI/Source/1.0.0/TypeChecks/isUCustomEvent');

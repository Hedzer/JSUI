
//Constants
import isStatic from 'JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Styleable/isStatic';

//Utilities
import exports from 'Parcello/exports';

export default function isUStyleable(u) {
	if (!u) { return false; }
	return !!u[isStatic];
}

exports(isUStyleable).as('JSUI/Source/1.0.0/TypeChecks/isUStyleable');

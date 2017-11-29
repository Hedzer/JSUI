
//Classes
import Feature from 'JSUI/Source/1.0.0/Classes/Core/Feature';

//Utilities
import exports from 'Parcello/exports';
import isUOfType from 'JSUI/Source/1.0.0/Utilities/TypeChecks/isUOfType';

export default function isUFeature(u) {
	if (!u) { return false; }
	return isUOfType(u, Feature);
}

exports(isUFeature).as('JSUI/Source/1.0.0/TypeChecks/isUFeature');

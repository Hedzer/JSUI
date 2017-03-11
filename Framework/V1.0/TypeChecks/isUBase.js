
//Classes
import Base from '/Framework/V1.0/Classes/Core/Base';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import isUOfType from '/Framework/V1.0/Utilities/TypeChecks/isUOfType';

export default function isUBase(u) {
	return isUOfType(u, Base);
}

exports(isUBase).as('/Framework/V1.0/TypeChecks/isUBase');


//Classes
import Base from '/Framework/V1.0/Classes/Core/Base';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

function isBase(u) {
	return (u instanceof Base);
}

export default isBase;

exports(isBase).as('/Framework/V1.0/TypeChecks/isBase');

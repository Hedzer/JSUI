
//Handlers
import types from '/Framework/V1.0/Classes/Core/Router/types';

//Constants
import atomics from '/Framework/V1.0/Constants/JS/types';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import getHandledType from '/Framework/V1.0/Utilities/TypeChecks/getHandledType';

function getIdentifiedType(u) {
	let type = getHandledType(types, u);
	
	if (atomics.includes(type)) {
		type = undefined;
	}
	
	return type;
}

export default getIdentifiedType;

exports(getIdentifiedType).as('/Framework/V1.0/Classes/Core/Router/getIdentifiedType');
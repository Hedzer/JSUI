
//Handlers
import types from 'JSUI/Source/1.0.0/Classes/Core/Router/types';

//Constants
import atomics from 'JSUI/Source/1.0.0/Constants/JS/types';

//Utilities
import exports from 'Parcello/exports';
import getHandledType from 'JSUI/Source/1.0.0/Utilities/TypeChecks/getHandledType';

function getIdentifiedType(u) {
	let type = getHandledType(types, u);
	
	if (atomics.includes(type)) {
		type = undefined;
	}
	
	return type;
}

export default getIdentifiedType;

exports(getIdentifiedType).as('JSUI/Source/1.0.0/Classes/Core/Router/getIdentifiedType');
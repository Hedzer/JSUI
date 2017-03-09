
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _string(property) {
	if (!property) { return; }
	return this[property];	
}

exports(_string).as('/Framework/V1.0/Classes/Core/Element/Handlers/Get/_string');

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function _string(property) {
	if (!property) { return; }
	return this[property];	
}

exports(_string).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Get/_string');

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

export default function _string(property) {
	if (!property) { return; }
	return this[property];	
}

exports(_string).as('/JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Get/_string');
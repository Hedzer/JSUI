
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _string(property, value) {
	if (!property) { return; }
	this[property] = value;
	return value;	
}

exports(_string).as('/Framework/V1.0/Classes/Core/Element/Handlers/Set/_string');

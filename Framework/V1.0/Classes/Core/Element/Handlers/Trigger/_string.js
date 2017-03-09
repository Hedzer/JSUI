
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _string(name, args){
	if (!this.element){ return false; }
	let event = new CustomEvent(name, { "detail": args });
	this.element.dispatchEvent(event);
	return true;
}

exports(_string).as('/Framework/V1.0/Classes/Core/Element/Handlers/Trigger/_string');

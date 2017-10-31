
//Utilities
import exports from 'Parcello/exports';

export default function _string(name, args){
	if (!this.element){ return false; }
	let event = new CustomEvent(name, { "detail": args });
	this.element.dispatchEvent(event);
	return true;
}

exports(_string).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Trigger/_string');


//Utilities
import exports from 'Parcello/exports';

export default function _undefined() {
	this.trigger('destructed');
	return this.destructor();	
}

exports(_undefined).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Remove/_undefined');
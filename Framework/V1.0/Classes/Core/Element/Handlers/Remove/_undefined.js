
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _undefined() {
	this.trigger('destructed');
	return this.destructor();	
}

exports(_undefined).as('/Framework/V1.0/Classes/Core/Element/Handlers/Remove/_undefined');
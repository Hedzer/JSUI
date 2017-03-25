
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function _function(method, args) {
	method.call(this, args);
	return this;
}

exports(_function).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Do/_function');

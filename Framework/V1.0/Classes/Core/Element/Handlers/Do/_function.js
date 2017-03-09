
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _function(method, args) {
	method.call(this, args);
	return this;
}

exports(_function).as('/Framework/V1.0/Classes/Core/Element/Handlers/Do/_function');

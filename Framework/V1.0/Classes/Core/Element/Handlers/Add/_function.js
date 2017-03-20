
//TypeChecks
import isUBehavior from '/Framework/V1.0/TypeChecks/isUBehavior';
import isUElement from '/Framework/V1.0/TypeChecks/isUElement';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _function(method) {

	if (isUElement(method)) {
		return this.add(new method());
	}

	if (isUBehavior(method)) {
		return this.add(new method());
	}
	
}

exports(_function).as('/Framework/V1.0/Classes/Core/Element/Handlers/Add/_function');


//TypeChecks
import isUBehavior from '/JSUI/Source/V1.0/TypeChecks/isUBehavior';
import isUElement from '/JSUI/Source/V1.0/TypeChecks/isUElement';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function _function(method) {

	if (isUElement(method)) {
		return this.add(new method());
	}

	if (isUBehavior(method)) {
		return this.add(new method());
	}
	
}

exports(_function).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Add/_function');

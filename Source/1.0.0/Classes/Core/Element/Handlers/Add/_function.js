
//TypeChecks
import isUBehavior from 'JSUI/Source/1.0.0/TypeChecks/isUBehavior';
import isUElement from 'JSUI/Source/1.0.0/TypeChecks/isUElement';

//Utilities
import exports from 'Parcello/exports';

export default function _function(method) {

	if (isUElement(method)) {
		return this.add(new method());
	}

	if (isUBehavior(method)) {
		return this.add(new method());
	}
	
}

exports(_function).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Add/_function');

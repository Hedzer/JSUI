
//Classes
import ElementClassReceipt from '/Framework/V1.0/Classes/Receipts/ElementClass';

//TypeChecks
import isEmptyString from '/Framework/V1.0/TypeChecks/isEmptyString';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _string(name) {
	if (isEmptyString(name)) { return; }
	return new ElementClassReceipt(this.element, name);
}

exports(_string).as('/Framework/V1.0/Classes/Core/Element/Handlers/Class/_string');

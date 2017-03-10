
//Classes
import Receipt from '/Framework/V1.0/Classes/Core/Receipt';

//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';

//Utilities
import define from '/Framework/V1.0/Utilities/Properties/addHiddenValue';
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default class ElementReceipt extends Receipt {
	constructor(element) {
		super();
		define(this, $private, { element: element });
	}

	//properties
	get element() {
		return this[$private].element;
	}
	set element(element) {
		this[$private].element = element;
	}
}

exports(ElementReceipt).as('/Framework/V1.0/Classes/Receipts/Element');

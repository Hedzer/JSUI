
//Classes
import Receipt from 'JSUI/Source/1.0.0/Classes/Core/Receipt';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';

//Utilities
import define from 'JSUI/Source/1.0.0/Utilities/Properties/addHiddenValue';
import exports from 'Parcello/exports';

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

exports(ElementReceipt).as('JSUI/Source/1.0.0/Classes/Receipts/Element');

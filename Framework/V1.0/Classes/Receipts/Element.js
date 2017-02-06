import $private from '/Framework/V1.0/Constants/Keys/General/private';
import Receipt from '/Framework/V1.0/Classes/Core/Receipt';
import define from '/Framework/V1.0/Utilities/Properties/addHiddenValue';

export default class ElementReceipt extends Receipt {
	constructor(element) {
		super();
		define(this, $private, { element: element });
	}
	get element() {
		return this[$private].element;
	}
	set element(element) {
		this[$private].element = element;
	}
}
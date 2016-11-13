import $private from 'Framework/Constants/Keys/General/private';
import { default as Receipt } from 'Framework/Classes/Receipt';
import define from 'Framework/Utilities/Properties/addHiddenValue';

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
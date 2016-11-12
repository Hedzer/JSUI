import $private from 'Framework/Constants/Keys/General/private';
import { default as Receipt } from 'Framework/Classes/Receipt';

export default class ElementReceipt extends Receipt {
	constructor(element) {
		super();
		this[$private] = {
			element: (element || false)
		};
	}
	get element() {
		return this[$private].element;
	}
	set element(element) {
		this[$private].element = element;
	}
}
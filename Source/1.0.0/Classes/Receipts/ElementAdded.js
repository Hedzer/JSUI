
//Classes
import ElementReceipt from 'JSUI/Source/1.0.0/Classes/Receipts/Element';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';

//Utilities
import addClass from 'JSUI/Source/1.0.0/Utilities/Elements/addClass';
import exports from 'Parcello/exports';

export default class ElementAddedReceipt extends ElementReceipt {
	constructor(element, addition) {
		super(element);
		this[$private].addition = addition;
	}

	//methods
	as(name) {
		let element = this[$private].element;
		let addition = this[$private].addition;
		let uid = element.uid;

		if (name){
			element[name] = addition;
			addition[$private].mapped = (addition[$private].mapped || {});
			let map = addition[$private].mapped;
			map[uid] = (map[uid] || []);
			map[uid].push(name);
			addition.attribute('as', name);
			addClass(addition.element, `as-${name}`);
		}

		return addition;
	}
}

exports(ElementAddedReceipt).as('JSUI/Source/1.0.0/Classes/Receipts/ElementAdded');

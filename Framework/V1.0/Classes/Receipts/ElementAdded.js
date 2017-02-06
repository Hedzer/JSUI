import $private from '/Framework/V1.0/Constants/Keys/General/private';
import ElementReceipt from '/Framework/V1.0/Classes/Receipts/Element';
import addClass from '/Framework/V1.0/Utilities/Elements/addClass';

export default class ElementAddedReceipt extends ElementReceipt {
	constructor(element, addition) {
		super(element);
		this[$private].addition = addition;
	}
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
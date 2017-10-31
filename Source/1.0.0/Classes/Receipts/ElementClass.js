
//Classes
import ElementReceipt from 'JSUI/Source/1.0.0/Classes/Receipts/Element';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';

//TypeChecks
import isArray from 'JSUI/Source/1.0.0/TypeChecks/isArray';
import isString from 'JSUI/Source/1.0.0/TypeChecks/isString';

//Utilities
import exports from 'Parcello/exports';
import getClasses from 'JSUI/Source/1.0.0/Utilities/Elements/getClasses';

export default class ElementClassReceipt extends ElementReceipt {
	constructor(element, className) {
		super(element);
		this.element = element;
		let classes = [];
		if (isArray(className)) { classes = className; }
		if (isString(className)) {
			classes = className.split(' ');
		}
		this[$private].classes = classes;
	}

	//methods
	add() {
		let existing = (getClasses(this.element) || {});
		this[$private].classes.forEach((name) => {
			existing[name] = true;
		});
		this.element.className = Object.keys(existing).join(' ');
		return existing;
	}
	exists() {
		let existing = (getClasses(this.element) || {});
		let classes = this[$private].classes;
		let count = classes.length;
		for (let i = 0; i < count; i++) {
			let name = classes[i];
			if (!existing[name]) {
				return false;
			}
		};
		return true; 
	}
	remove() {
		let existing = (getClasses(this.element) || {});
		this[$private].classes.forEach((name) => {
			delete existing[name];
		});
		this.element.className = Object.keys(existing).join(' ');
		return existing;
	}
	toggle() {
		let existing = (getClasses(this.element) || {});
		this[$private].classes.forEach((name) => {
			if (existing[name]) {
				delete existing[name];
				return;
			}
			existing[name] = true;
		});
		this.element.className = Object.keys(existing).join(' ');
		return existing;
	}
}

exports(ElementClassReceipt).as('JSUI/Source/1.0.0/Classes/Receipts/ElementClass');

import { default as ElementReceipt } from 'Framework/Classes/ElementReceipt';
import { default as isElement } from 'Framework/TypeChecks/isElement';
import { default as getClasses } from 'Framework/Utilities/Elements/getClasses';

export default class ElementClassReceipt extends ElementReceipt {
	constructor(element, className) {
		super(element);
		this.element = element;
		this.private.classes = className.split(' ');
	}
	add() {
		let existing = (getClasses(this.element) || {});
		this.private.classes.forEach((name) => {
			existing[name] = true;
		});
		this.element.className = Object.keys(existing).join(' ');
		return existing;
	}
	remove() {
		let existing = (getClasses(this.element) || {});
		this.private.classes.forEach((name) => {
			delete existing[name];
		});
		this.element.className = Object.keys(existing).join(' ');
		return existing;
	}
	toggle() {
		let existing = (getClasses(this.element) || {});
		this.private.classes.forEach((name) => {
			if (existing[name]) {
				delete existing[name];
				return;
			}
			existing[name] = true;
		});
		this.element.className = Object.keys(existing).join(' ');
		return existing;
	}
	exists() {
		let existing = (getClasses(this.element) || {});
		let classes = this.private.classes;
		let count = classes.length;
		for (let i = 0; i < count; i++) {
			let name = classes[i];
			if (!existing[name]) {
				return false;
			}
		};
		return true; 
	}
}
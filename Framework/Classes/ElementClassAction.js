import { default as ElementAction } from 'Framework/Classes/ElementAction';
import { default as isElement } from 'Framework/TypeChecks/isElement';
import { default as getClasses } from 'Framework/Utilities/Elements/getClasses';

export default class ElementClassAction extends ElementAction {
	constructor(element, className) {
		super(element);
		this.element = element;
		this.private.classes = className.split(' ');
	}
	add() {
		var existing = (getClasses(this.element) || {});
		this.private.classes.forEach((name) => {
			existing[name] = true;
		});
		this.element.className = Object.keys(existing).join(' ');
		return existing;
	}
	remove() {
		var existing = (getClasses(this.element) || {});
		this.private.classes.forEach((name) => {
			delete existing[name];
		});
		this.element.className = Object.keys(existing).join(' ');
		return existing;
	}
	toggle() {
		var existing = (getClasses(this.element) || {});
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
		var existing = (getClasses(this.element) || {});
		var classes = this.private.classes;
		var count = classes.length;
		for (var i = 0; i < count; i++) {
			var name = classes[i];
			if (!existing[name]) {
				return false;
			}
		};
		return true; 
	}
}
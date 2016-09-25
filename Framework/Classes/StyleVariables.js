import isString from 'Framework/TypeChecks/isString';
import isObject from 'Framework/TypeChecks/isObject';
import isArray from 'Framework/TypeChecks/isArray';
import { default as addProperty } from 'Framework/Utilities/Properties/add';
import Distinct from 'Framework/Classes/Distinct';

export default class StyleVariables extends Distinct {
	constructor() {
		super();
	}
	add(name, value) {
		if (isString(name)) {
			addProperty(this, name, value);
			this.trigger('variableAdded', {
				name: name,
				value: value
			});
			return;
		}
		if (isObject(name)) {
			Object.keys(name).forEach((key) => {
				this.add(key, name[key]);
			});
		}
	}
	remove(name) {
		if (isString(name)) {
			if (this[name]) {
				delete this[name];
				trigger('variableRemoved', name);
				return true;
			}
			return false;
		}
		if (isArray(name)) {
			name.forEach((key) => {
				this.remove(key);
			});
			return true;
		}
	}
}
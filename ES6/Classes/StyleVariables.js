import isString from '../TypeChecks/isString';
import isObject from '../TypeChecks/isObject';
import isArray from '../TypeChecks/isArray';
import { default as addProperty } from '../Utilities/Properties/add';
import Distinct from './Distinct';

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
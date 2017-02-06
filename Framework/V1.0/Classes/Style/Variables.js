import Identity from '/Framework/V1.0/Classes/Core/Identity';
import isString from '/Framework/V1.0/TypeChecks/isString';
import isObject from '/Framework/V1.0/TypeChecks/isObject';
import isArray from '/Framework/V1.0/TypeChecks/isArray';
import addProperty from '/Framework/V1.0/Utilities/Properties/add';
import Distinct from '/Framework/V1.0/Classes/Core/Distinct';

const identity = new Identity({
	class: 'StyleVariables',
	major: 1, minor: 0, patch: 0
});

export default class StyleVariables extends Distinct {
	constructor() {
		super();
		this.identity = identity;
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
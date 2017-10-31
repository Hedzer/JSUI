
//Classes
import Distinct from 'JSUI/Source/1.0.0/Classes/Core/Distinct';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';

//Singletons
import Sheets from 'JSUI/Source/1.0.0/Singletons/Style/Sheets';

//TypeChecks
import isArray from 'JSUI/Source/1.0.0/TypeChecks/isArray';
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';
import isObject from 'JSUI/Source/1.0.0/TypeChecks/isObject';
import isString from 'JSUI/Source/1.0.0/TypeChecks/isString';
import isUndefined from 'JSUI/Source/1.0.0/TypeChecks/isUndefined';

//Utilities
import addHiddenValue from 'JSUI/Source/1.0.0/Utilities/Properties/addHiddenValue';
import debounce from 'JSUI/Source/1.0.0/Utilities/Functions/debounce';
import exports from 'Parcello/exports';
import getCodeStrings from 'JSUI/Source/1.0.0/Utilities/Templating/getCodeStrings';
import getVariables from 'JSUI/Source/1.0.0/Utilities/Templating/getVariables';
import replaceAll from 'JSUI/Source/1.0.0/Utilities/Strings/replaceAll';

const identity = new Identity({
	class: 'StyleVariables',
	major: 1, minor: 0, patch: 0
});

const namespace = 'JSUI.Style.Variables';

export default class StyleVariables extends Distinct {
	constructor() {
		super();
		this.identity = identity;
		this.onVariableChanged = debounce(this.onVariableChanged, 1);
		if (!(namespace in window)) {
			addHiddenValue(window, namespace, this);
		}
		return window[namespace];
	}
	add(name, value) {
		if (isString(name)) {
			this.state(name, value);
			this.trigger(['variableAdded', 'variableChanged'], { name, value });
			return;
		}
		if (isObject(name)) {
			Object.keys(name).forEach((key) => {
				this.add(key, name[key]);
			});
		}
	}
	get(name) {
		name = name.trim();
		return this.state(name);
	}
	getValue(name) {
		let value = this.state(name);
		
		if (isFunction(value)) {
			value = value();
		}

		return value;
	}
	parse(template) {
		if (!isString(template)) { return template; }
		let vars = getVariables(template);
		if (!vars.length) { return template; }
		vars.forEach((variable) => {
			let contents = variable.trim();
			if (contents.length < 4) { return; }
			contents = contents.substring(2, contents.length - 2);
			if (contents.includes('||')) {
				let parts = contents.split('||');
				for (let i = 0; i < parts.length; i++) {
					let value = this.resolve(parts[i].trim());
					if (!isUndefined(value)) {
						template = replaceAll(template, variable, value);
						break;
					}
				}
			}
			let value = this.resolve(variable);
			template = replaceAll(template, variable, value);
		});
		return template;
	}
	resolve(value) {
		let literal = getCodeStrings(value);
		if (literal.length) {
			literal = literal[0];
			literal = literal.substring(1, literal.length - 1);
			return literal;
		}
		value = this.getValue(value);
		return value;
	}
	remove(name) {
		if (isString(name)) {
			if (this[name]) {
				delete this[name];
				this.trigger(['variableRemoved', 'variableChanged'], { name });
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
	onVariableChanged() {
		Object.values(Sheets).forEach((sheet) => {
			sheet.render();
		});
	}
}

exports(StyleVariables).as('JSUI/Source/1.0.0/Classes/Style/Variables');

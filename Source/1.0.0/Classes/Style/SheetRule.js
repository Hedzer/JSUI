
//Classes
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';
import JSUIError from 'JSUI/Source/1.0.0/Classes/Core/Error';
import StateChangeReceipt from 'JSUI/Source/1.0.0/Classes/Receipts/StateChange';
import StyleRules from 'JSUI/Source/1.0.0/Classes/Style/Rules';
import StyleSheet from 'JSUI/Source/1.0.0/Classes/Style/Sheet';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';
import equivalents from 'JSUI/Source/1.0.0/Constants/CSS/equivalents';

//Singletons
import Sheets from 'JSUI/Source/1.0.0/Singletons/Style/Sheets';

//TypeChecks
import isElement from 'JSUI/Source/1.0.0/TypeChecks/isElement';
import isNumber from 'JSUI/Source/1.0.0/TypeChecks/isNumber';
import isObject from 'JSUI/Source/1.0.0/TypeChecks/isObject';
import isString from 'JSUI/Source/1.0.0/TypeChecks/isString';

//Utilities
import exports from 'Parcello/exports';

const identity = new Identity({
	class: 'StyleSheetRule',
	major: 1, minor: 0, patch: 0,
});

export default class StyleSheetRule extends StyleRules {
	constructor(selector, properties) {
		super();
		this.identity = identity;
		
		this[$private] = {
			importance: 0,
			created: new Date().valueOf(),
			isSwitchable: false,
			isOnByDefault: true,
		};

		if (selector) {
			this.selector = selector;
		}
		if (isObject(properties)) {
			Object.keys(properties).forEach((key) => {
				this[key] = properties[key];
			});
		}
	}

	//methods
	addTo(JSUIElement) {
		if (!this.isSwitchable || !this.class) { return; }
		if (isElement(JSUIElement)) {
			JSUIElement.class(this.class).add();
		}
	}
	removeFrom(JSUIElement) {
		if (!this.isSwitchable || !this.class) { return; }
		if (isElement(JSUIElement)) {
			JSUIElement.class(this.class).remove();
		}
	}
	render(context) {
		context = (context || this[$private].context || 'default');
		let sheet = Sheets[context] || new StyleSheet(context);
		if (!sheet[$private].rules[this.uid]) {
			sheet.add(this);
			return;
		}

		if (!this.selector) {
			let error = new JSUIError();
			error.throw();
		}
		let styles = [];
		let rendered = '';
		Object.keys(this[$private].styles).forEach((key) => {
			let name = equivalents[key];
			let value = this[key];
			//needs handlers for values
			styles.push(`${name}: ${value};`);
		});
		let selector = this.selector;
		let media = this.media;
		let tab = (media ? '\t' : '');
		//needs handers for selectors
		let styleText = styles.join(`\n\t${tab}`);
		rendered = `${tab}${selector} {\n\t${tab}${styleText}\n${tab}}`;
		if (media) {
			rendered = `${media} {\n${rendered}\n}`;
		}
		return rendered;
	}
	set(name, value) {
		if (isObject(name)) {
			Object.keys(name).forEach((key) => {
				let value = name[key];
				this[key] = value;
			});
			return;
		}
		if (isString(name)) {
			if (arguments.length > 1) {
				if (isString(value)) {
					this[name] = value;
				}
				//there will be room here for functions and other stuff
			}
		}
	}

	//properties
	get class() {
		return this[$private].class;
	}
	set class(className) {
		let old = this[$private].class;
		if (old === className) { return; }
		this[$private].class = className;
		let data = new StateChangeReceipt({old: old, new: className});
		this.trigger('classChanged', data);
	}
	get context() {
		return (this[$private].context || 'default');
	}
	set context(context) {
		let old = this[$private].context;
		if (old === context) { return; }
		this[$private].context = context;
		let data = new StateChangeReceipt({old: old, new: context});
		this.trigger('contextChanged', data);
	}
	get importance() {
		return (this[$private].importance || 0);
	}
	set importance(zindex) {
		let old = this[$private].importance;
		if (isNumber(zindex)) {
			if (old === zindex) { return; }
			this[$private].importance = zindex;
		}
		let data = new StateChangeReceipt({old: old, new: zindex});
		this.trigger('importanceChanged', data);
	}
	get isOnByDefault() {
		return this[$private].isOnByDefault;
	}
	set isOnByDefault(bool) {
		let old = this[$private].isOnByDefault;
		if (old === bool) { return; }
		this[$private].isOnByDefault = bool;
		let data = new StateChangeReceipt({old: old, new: bool});
		this.trigger('isOnByDefaultChanged', data);
	}
	get isSwitchable() {
		return this[$private].isSwitchable;
	}
	set isSwitchable(bool) {
		let old = this[$private].isSwitchable;
		if (old === bool) { return; }
		this[$private].isSwitchable = bool;
		let data = new StateChangeReceipt({old: old, new: bool});
		this.trigger('isSwitchableChanged', data);
	}
	get media() {
		return this[$private].media;
	}
	set media(media) {
		let self = this;
		let changed = () => {
			let old = this[$private].media;
			let data = new StateChangeReceipt({
				owner: self,
				old: old,
				new: media
			});
			this.trigger('mediaChanged', data);					
		};

		if (isString(media)) {
			this[$private].media = media;
			changed();
			return;
		}
		//will need array and object
	}
	get selector() {
		return this[$private].selector;
	}
	set selector(selector) {
		let self = this;
		let changed = () => {
			let old = this[$private].selector;
			let data = new StateChangeReceipt({
				owner: self,
				old: old,
				new: selector
			});
			this.trigger('selectorChanged', data);					
		};

		if (isString(selector)) {
			this[$private].selector = selector;
			changed();
			return;
		}
		//will need array and object
	}
}

exports(StyleSheetRule).as('JSUI/Source/1.0.0/Classes/Style/SheetRule');

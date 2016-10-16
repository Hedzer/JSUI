import Identity from 'Framework/Classes/Identity';
import isString from 'Framework/TypeChecks/isString';
import isNumber from 'Framework/TypeChecks/isNumber';
import isObject from 'Framework/TypeChecks/isObject';
import isJSUI from 'Framework/TypeChecks/isJSUI';
import Sheets from 'Framework/Singletons/Style/Sheets';
import equivalents from 'Framework/Constants/CSS/equivalents';
import StyleRules from 'Framework/Classes/StyleRules';
import JSUIError from 'Framework/Classes/JSUIError';
import StyleSheet from 'Framework/Classes/StyleSheet';

const identity = new Identity({
	class: 'StyleSheetRule',
	major: 1, minor: 0, patch: 0
});

export default class StyleSheetRule extends StyleRules {
	constructor(selector, properties) {
		super();
		this.identity = identity;
		this.private.importance = 0;
		this.private.created = new Date().valueOf();
		this.private.isSwitchable = false;
		this.private.isOnByDefault = true;
		if (selector) {
			this.selector = selector;
		}
		if (isObject(properties)) {
			this.set(properties);
		}
	}
	get selector() {
		return this.private.selector;
	}
	set selector(selector) {
		var self = this;
		var changed = () => {
			var old = this.private.selector;
			this.trigger('selectorChanged', {
				owner: self,
				old: old,
				new: selector
			});					
		};

		if (isString(selector)) {
			this.private.selector = selector;
			changed();
			return;
		}
		//will need array and object
	}
	get media() {
		return this.private.media;
	}
	set media(media) {
		var self = this;
		var changed = () => {
			var old = this.private.media;
			this.trigger('mediaChanged', {
				owner: self,
				old: old,
				new: media
			});					
		};

		if (isString(media)) {
			this.private.media = media;
			changed();
			return;
		}
		//will need array and object
	}
	get importance() {
		return (this.private.importance || 0);
	}
	set importance(zindex) {
		let old = this.private.importance;
		if (isNumber(zindex)) {
			if (old === zindex) { return; }
			this.private.importance = zindex;
		}
		this.trigger('importanceChanged', {old: old, new: zindex});
	}
	get context() {
		return (this.private.context || 'default');
	}
	set context(context) {
		let old = this.private.context;
		if (old === context) { return; }
		this.private.context = context;
		this.trigger('contextChanged', {old: old, new: context});
	}
	set(name, value) {
		if (isObject(name)) {
			Object.keys(name).forEach((key) => {
				var value = name[key];
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
	render(context) {
		context = (context || this.private.context || 'default');
		var sheet = Sheets[context] || new StyleSheet(context);
		if (!sheet.private.rules[this.uid]) {
			sheet.add(this);
			return;
		}

		if (!this.selector) {
			var error = new JSUIError();
			error.throw();
		}
		var styles = [];
		var rendered = '';
		Object.keys(this.private.styles).forEach((key) => {
			var name = equivalents[key];
			var value = this.private.styles[key];
			//needs handlers for values
			styles.push(`${name}: ${value};`);
		});
		var selector = this.selector;
		var media = this.media;
		var tab = (media ? '\t' : '');
		//needs handers for selectors
		var styleText = styles.join(`\n\t${tab}`);
		rendered = `${tab}${selector} {\n\t${tab}${styleText}\n${tab}}`;
		if (media) {
			rendered = `${media} {\n${rendered}\n}`;
		}
		return rendered;
	}
	get isSwitchable() {
		return this.private.isSwitchable;
	}
	set isSwitchable(bool) {
		let old = this.private.isSwitchable;
		if (old === bool) { return; }
		this.private.isSwitchable = bool;
		this.trigger('isSwitchableChanged', {old: old, new: bool});
	}
	get isOnByDefault() {
		return this.private.isOnByDefault;
	}
	set isOnByDefault(bool) {
		let old = this.private.isOnByDefault;
		if (old === bool) { return; }
		this.private.isOnByDefault = bool;
		this.trigger('isOnByDefaultChanged', {old: old, new: bool});
	}
	get class() {
		return this.private.class;
	}
	set class(className) {
		let old = this.private.class;
		if (old === className) { return; }
		this.private.class = className;
		this.trigger('classChanged', {old: old, new: className});
	}
	_on(JSUIElement) {
		if (!this.isSwitchable || !this.class) { return; }
		if (isJSUI(JSUIElement)) {
			JSUIElement.class(this.class).add();
		}
	}
	_off(JSUIElement) {
		if (!this.isSwitchable || !this.class) { return; }
		if (isJSUI(JSUIElement)) {
			JSUIElement.class(this.class).remove();
		}
	}
}
import Identity from 'Framework/Classes/Identity';
import isString from 'Framework/TypeChecks/isString';
import isFunction from 'Framework/TypeChecks/isFunction';
import isNumber from 'Framework/TypeChecks/isNumber';
import isStyleSheetRule from 'Framework/TypeChecks/isStyleSheetRule';
import isUStyleSheetRule from 'Framework/TypeChecks/isUStyleSheetRule';
import { default as sort } from 'Framework/Sorts/StyleSheet/rules';
import Sheets from 'Framework/Singletons/Style/Sheets';
import Distinct from 'Framework/Classes/Distinct';

const identity = new Identity({
	class: 'StyleSheet',
	major: 1, minor: 0, patch: 0
});

export default class StyleSheet extends Distinct {
	constructor(context) {
		super();
		context = (context || 'default');

		this.private.rules = {};
		this.private.timer = false;
		this.private.element = false;
		this.private.context = context;

		let contextSheet = Sheets[context];
		if (contextSheet) {
			this.private = contextSheet.private;
			return this;
		}

		let element = document.createElement('style');
		element.appendChild(document.createTextNode(""));
		element.setAttribute('id', `style-${context}`);
		document.head.appendChild(element);
		this.private.element = element;
		Sheets[context] = this;

		this.identity = identity;
	}
	add(rule) {
		if (isStyleSheetRule(rule)) {
			let rules = this.private.rules;
			if (!rules[rule.uid]) {
				rules[rule.uid] = {
					references: 1,
					rule: rule
				};
				return this.render(10);
			}
			rules[rule.uid].references++;
			return true;
		}
		if (isUStyleSheetRule(rule)) {
			return this.add(new rule(this.context));
		}
	}
	remove(rule) {
		let rules = this.private.rules;
		if (isString(rule)) {
			let entry = rules[rule];
			if (entry) {
				entry.references--;
				if (entry.references < 1) {
					delete rules[rule];
					this.render(10);					
				}
			}
			return;
		}
		if (isStyleSheetRule(rule)) {
			this.remove(rule.uid);
		}
	}
	get context() {
		return this.private.context;
	}
	get variables() {}
	set variables(vars) {}
	get sorter() {
		if (this.private.sorter) {
			return this.private.sorter;
		}
		return sort;
	}
	set sorter(method) {
		if (isFunction(method)) {
			this.private.sorter = method;
		}
	}
	render(timeout) {
		let entries = this.private.rules;
		clearTimeout(this.private.timer);
		if (isNumber(timeout)) {
			this.private.timer = setTimeout(this.render.bind(this), timeout);
			return;
		}

		let entryList = Object.keys(entries);
		//check to see if there are any entries
		if (!entryList.length) {
			document.head.removeChild(this.private.element);
			return;
		}

		//create the stylesheet and disable it
		let element = document.createElement('style');
		element.setAttribute('id', `style-${this.context}`);
		element.appendChild(document.createTextNode(""));
		document.head.appendChild(element);
		element.sheet.disabled = true;

		//fetch all the entries and organize them
		let articles = [];
		entryList.forEach((uid) => {
			let entry = entries[uid];
			articles.push(entry.rule);
		});
		articles.sort(this.sorter);

		//render each rule
		articles.forEach((rule) => {
			let value = rule.render(this.context);
			element.sheet.insertRule(value, 0);
		});
		
		//enable the new stylesheet and remove the old one
		element.sheet.disabled = false;
		document.head.removeChild(this.private.element);
		this.private.element = element;
		this.trigger('rendered');
	}
}
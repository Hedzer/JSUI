import Identity from 'Framework/Classes/Identity';
import isString from 'Framework/TypeChecks/isString';
import isFunction from 'Framework/TypeChecks/isFunction';
import isNumber from 'Framework/TypeChecks/isNumber';
import isStyleRule from 'Framework/TypeChecks/isStyleRule';
import isUStyleRule from 'Framework/TypeChecks/isUStyleRule';
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

		var contextSheet = Sheets[context];
		if (contextSheet) {
			this.private = contextSheet.private;
			return this;
		}

		var element = document.createElement('style');
		element.appendChild(document.createTextNode(""));
		element.setAttribute('id', `style-${context}`);
		document.head.appendChild(element);
		this.private.element = element;
		Sheets[context] = this;

		this.identity = identity;
	}
	add(rule) {
		if (isStyleRule(rule)) {
			var rules = this.private.rules;
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
		if (isUStyleRule(rule)) {
			return this.add(new rule(this.context));
		}
	}
	remove(rule) {
		var rules = this.private.rules;
		if (isString(rule)) {
			var entry = rules[rule];
			if (entry) {
				entry.references--;
				if (entry.references < 1) {
					delete rules[rule];
					this.render(10);					
				}
			}
			return;
		}
		if (isStyleRule(rule)) {
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
		var entries = this.private.rules;
		clearTimeout(this.private.timer);
		if (isNumber(timeout)) {
			this.private.timer = setTimeout(this.render.bind(this), timeout);
			return;
		}

		var entryList = Object.keys(entries);
		//check to see if there are any entries
		if (!entryList.length) {
			document.head.removeChild(this.private.element);
			return;
		}

		//create the stylesheet and disable it
		var element = document.createElement('style');
		element.setAttribute('id', `style-${this.context}`);
		element.appendChild(document.createTextNode(""));
		document.head.appendChild(element);
		element.sheet.disabled = true;

		//fetch all the entries and organize them
		var articles = [];
		entryList.forEach((uid) => {
			var entry = entries[uid];
			articles.push(entry.rule);
		});
		articles.sort(this.sorter);

		//render each rule
		articles.forEach((rule) => {
			var value = rule.render(this.context);
			element.sheet.insertRule(value, rule.importance);
		});
		
		//enable the new stylesheet and remove the old one
		element.sheet.disabled = false;
		document.head.removeChild(this.private.element);
		this.private.element = element;
		this.trigger('rendered');
	}
}
import isString from '../TypeChecks/isString';
import isFunction from '../TypeChecks/isFunction';
import isNumber from '../TypeChecks/isNumber';
import isStyleRule from '../TypeChecks/isStyleRule';
import isUStyleRule from '../TypeChecks/isUStyleRule';
import { default as sort } from '../Sorts/StyleSheet/rules';
import Sheets from '../Singletons/Style/Sheets';
import Distinct from './Distinct';

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
	}
	add(rule) {
		if (isStyleRule(rule)) {
			var rules = this.private.rules;
			if (!rules[rule.uid]) {
				rules[rule.uid] = rule;
				return this.render(50);
			}
			return true;
		}
		if (isUStyleRule(rule)) {
			return this.add(new rule(this.context));
		}
	}
	remove(rule) {
		var rules = this.private.rules;
		if (isString(rule)) {
			if (rules[rule]) {
				delete rules[rule];
				this.render(50);
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
		var rules = this.private.rules;
		clearTimeout(this.private.timer);
		if (isNumber(timeout)) {
			this.private.timer = setTimeout(this.render.bind(this), timeout);
			return;
		}

		//create the stylesheet and disable it
		var element = document.createElement('style');
		element.setAttribute('id', `style-${this.context}`);
		element.appendChild(document.createTextNode(""));
		document.head.appendChild(element);
		element.sheet.disabled = true;

		//fetch all the rules and organize them
		var articles = [];
		Object.keys(rules).forEach((uid) => {
			var rule = rules[uid];
			articles.push(rule);
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
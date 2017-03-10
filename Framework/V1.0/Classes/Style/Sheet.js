
//Classes
import Distinct from '/Framework/V1.0/Classes/Core/Distinct';
import Identity from '/Framework/V1.0/Classes/Core/Identity';

//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';

//Singletons
import Sheets from '/Framework/V1.0/Singletons/Style/Sheets';

//Sorts
import sort from '/Framework/V1.0/Sorts/StyleSheet/rules';

//TypeChecks
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isNumber from '/Framework/V1.0/TypeChecks/isNumber';
import isString from '/Framework/V1.0/TypeChecks/isString';
import isStyleSheetRule from '/Framework/V1.0/TypeChecks/isStyleSheetRule';
import isUStyleSheetRule from '/Framework/V1.0/TypeChecks/isUStyleSheetRule';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';


const identity = new Identity({
	class: 'StyleSheet',
	major: 1, minor: 0, patch: 0,
});

export default class StyleSheet extends Distinct {
	constructor(context) {
		super();
		context = (context || 'default');

		this[$private] = {
			rules: {},
			timer: false,
			element: false,
			context: context,
		};

		let contextSheet = Sheets[context];
		if (contextSheet) {
			this[$private] = contextSheet[$private];
			return this;
		}

		let element = document.createElement('style');
		element.appendChild(document.createTextNode(""));
		element.setAttribute('id', `style-${context}`);
		document.head.appendChild(element);
		this[$private].element = element;
		Sheets[context] = this;

		this.identity = identity;
	}

	//methods
	add(rule) {
		if (isStyleSheetRule(rule)) {
			let rules = this[$private].rules;
			if (!rules[rule.uid]) {
				rules[rule.uid] = {
					references: 1,
					rule: rule,
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
		let rules = this[$private].rules;
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
	render(timeout) {
		let entries = this[$private].rules;
		clearTimeout(this[$private].timer);
		if (isNumber(timeout)) {
			this[$private].timer = setTimeout(this.render.bind(this), timeout);
			return;
		}

		let entryList = Object.keys(entries);
		//check to see if there are any entries
		if (!entryList.length) {
			document.head.removeChild(this[$private].element);
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
		document.head.removeChild(this[$private].element);
		this[$private].element = element;
		this.trigger('rendered');
	}

	//properties
	get context() {
		return this[$private].context;
	}
	get sorter() {
		if (this[$private].sorter) {
			return this[$private].sorter;
		}
		return sort;
	}
	set sorter(method) {
		if (isFunction(method)) {
			this[$private].sorter = method;
		}
	}
	get variables() {}
	set variables(vars) {}
}

exports(StyleSheet).as('/Framework/V1.0/Classes/Style/Sheet');

//Classes
import Distinct from 'JSUI/Source/1.0.0/Classes/Core/Distinct';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';
import StyleBehavior from 'JSUI/Source/1.0.0/Classes/Behaviors/Style';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';

//Singletons
import Sheets from 'JSUI/Source/1.0.0/Singletons/Style/Sheets';

//TypeChecks
import isStyleSheetRule from 'JSUI/Source/1.0.0/TypeChecks/isStyleSheetRule';

//Utilities
import exports from 'Parcello/exports';

const identity = new Identity({
	class: 'Styleable',
	major: 1, minor: 0, patch: 0,
});

export default class Styleable extends Distinct {
	constructor() {
		super();
		this.identity = identity;
		this[$private].context = 'default';
		this[$private].style = {
			rules: {}
		};
	}

	//methods
	add(style) {
		if (isStyleSheetRule(style)) {
			let rules = this[$private].style.rules;
			let entry = rules[style.uid];
			let Style = this.Style;
			if (!entry) {
				entry = {
					rule: style,
					context: Style.context,
				};
				rules[style.uid] = entry;
				style.render(Style.context);
				return;
			}
			if (entry.context !== Style.context) {
				let sheet = Sheets[entry.context];
				if (sheet) {
					sheet.remove(style);
					style.render(Style.context);
				}
				return;
			}
		}
	}

	//properties
	get Style() {
		if (!this[$private].Style) {
			this[$private].Style = new StyleBehavior(this);
		}
		return this[$private].Style;
	}
}

exports(Styleable).as('JSUI/Source/1.0.0/Classes/Core/Styleable');

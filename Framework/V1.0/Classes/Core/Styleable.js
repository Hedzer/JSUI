
//Classes
import Distinct from '/Framework/V1.0/Classes/Core/Distinct';
import Identity from '/Framework/V1.0/Classes/Core/Identity';
import StyleBehavior from '/Framework/V1.0/Classes/Behaviors/Style';

//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';

//Handlers
import constructor from '/Framework/V1.0/Classes/Core/Styleable/constructor';

//Singletons
import Sheets from '/Framework/V1.0/Singletons/Style/Sheets';

//TypeChecks
import isStyleSheetRule from '/Framework/V1.0/TypeChecks/isStyleSheetRule';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Styleable',
	major: 1, minor: 0, patch: 0,
});

export default class Styleable extends Distinct {
	constructor() {
		super();
		constructor.call(this);
		this.identity = identity;
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

exports(Styleable).as('/Framework/V1.0/Classes/Core/Styleable');

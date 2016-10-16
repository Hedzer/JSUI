import Identity from 'Framework/Classes/Identity';
import isStyleSheetRule from 'Framework/TypeChecks/isStyleSheetRule';
import Sheets from 'Framework/Singletons/Style/Sheets';
import Distinct from 'Framework/Classes/Distinct';
import StyleableHost from 'Framework/Classes/StyleableHost';
import constructor from 'Framework/Classes/Styleable/constructor';

const identity = new Identity({
	class: 'Styleable',
	major: 1, minor: 0, patch: 0
});

export default class Styleable extends Distinct {
	constructor() {
		super();
		constructor.call(this);
		this.identity = identity;
	}
	get Style() {
		if (!this.private.Style) {
			this.private.Style = new StyleableHost(this);
		}
		return this.private.Style;
	}
	add(style) {
		if (isStyleSheetRule(style)) {
			let rules = this.private.style.rules;
			let entry = rules[style.uid];
			let Style = this.Style;
			if (!entry) {
				entry = {
					rule: style,
					context: Style.context
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
}
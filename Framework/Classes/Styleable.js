import Identity from 'Framework/Classes/Identity';
import isStyleRule from 'Framework/TypeChecks/isStyleRule';
import Sheets from 'Framework/Singletons/Style/Sheets';
import Distinct from 'Framework/Classes/Distinct';
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
	get context() {
		return this.private.context;
	}
	set context(context) {
		var old = this.private.context;
		if (old === context) {
			return;
		}
		this.private.context = context;
		Object.keys(this.private.style.rules).forEach((uid) => {
			var entry = this.private.style.rules[uid];
			Sheets[old].remove(entry.rule);
			entry.rule.render(this.private.context);
		});
		this.trigger('contextChanged');
	}
	add(style) {
		if (isStyleRule(style)) {
			var rules = this.private.style.rules;
			var entry = rules[style.uid];
			if (!entry) {
				entry = {
					rule: style,
					context: this.context
				};
				rules[style.uid] = entry;
				style.render(this.context);
				return;
			}
			if (entry.context !== this.context) {
				var sheet = Sheets[entry.context];
				if (sheet) {
					sheet.remove(style);
					style.render(this.context);
				}
				return;
			}
		}
		
	}
}
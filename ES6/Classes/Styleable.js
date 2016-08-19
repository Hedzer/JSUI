import isStyleRule from '../TypeChecks/isStyleRule';
import Distinct from './Distinct';

export default class Styleable extends Distinct {
	constructor() {
		super();
		this.private.context = 'default';
		this.private.style = {
			rules: {}
		};
		//re-render css if context changes
		this.on('contextChanged', () => {
			Object.keys(this.private.style.rules).forEach((uid) => {
				var rule = this.private.style.rules[uid];
				rule.render(this.private.context);
			});
		});
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
		this.trigger('contextChanged');
	}
	add(style) {
		if (isStyleRule(style)) {
			this.private.style.rules[style.uid] = style;
			style.render(this.context);
		}
		return super.add(style);
	}
}
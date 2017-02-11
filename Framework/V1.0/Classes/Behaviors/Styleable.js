import $private from '/Framework/V1.0/Constants/Keys/General/private';
import isStyleSheetRule from '/Framework/V1.0/TypeChecks/isStyleSheetRule';
import Identity from '/Framework/V1.0/Classes/Core/Identity';
import Distinct from '/Framework/V1.0/Classes/Core/Distinct';
import StyleInline from '/Framework/V1.0/Classes/Style/Inline';
import Behaviorlike from '/Framework/V1.0/Mixins/Behaviorlike';

const identity = new Identity({
	class: 'StyleableBehavior',
	major: 1, minor: 0, patch: 0
});

export default class StyleableBehavior extends Behaviorlike(Distinct) {
	constructor(host) {
		super();
		this[$private].host = host;
		this.identity = identity;
	}
	get namespace() {
		return false;
	}
	get Inline() {
		if (!this[$private].Inline) {
			this[$private].Inline = new StyleInline(this[$private].host);
		}
		return this[$private].Inline;
	}
	get context() {
		return this[$private].context;
	}
	set context(context) {
		let host = this[$private].host;
		let old = this[$private].context;

		if (old === context) {
			return;
		}

		this[$private].context = context;
		Object.keys(host[$private].style.rules).forEach((uid) => {
			let entry = host[$private].style.rules[uid];
			Sheets[old].remove(entry.rule);
			entry.rule.render(this[$private].context);
		});

		host.trigger('Style.contextChanged', {
			old: old,
			new: context
		});
	}
	switch(style) {
		if (isStyleSheetRule(style)) {
			let styleActions = this[$private].styleActions = (this[$private].styleActions || {});
			let host = this[$private].host;

			let action = (styleActions[style.uid] || {
				on: style._on.bind(style, host),
				off: style._off.bind(style, host)
			});
			
			return action;
		}
	}
}
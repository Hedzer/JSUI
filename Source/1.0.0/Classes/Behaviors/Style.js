//Classes
import Distinct from 'JSUI/Source/1.0.0/Classes/Core/Distinct';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';
import StyleInline from 'JSUI/Source/1.0.0/Classes/Style/Inline';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';

//Mixins
import Behaviorlike from 'JSUI/Source/1.0.0/Mixins/Behaviorlike';

//Singletons
import Sheets from 'JSUI/Source/1.0.0/Singletons/Style/Sheets';

//TypeChecks
import isStyleSheetRule from 'JSUI/Source/1.0.0/TypeChecks/isStyleSheetRule';

//Utilities
import exports from 'Parcello/exports';

const identity = new Identity({
	class: 'StyleBehavior',
	major: 1, minor: 0, patch: 0,
});

export default class StyleBehavior extends Behaviorlike(Distinct) {
	constructor(host) {
		super();
		this[$private].host = host;
		this[$private].context = 'default';
		this.identity = identity;
	}
	switch(style) {
		if (isStyleSheetRule(style)) {
			let styleActions = this[$private].styleActions = (this[$private].styleActions || {});
			let host = this[$private].host;

			let action = (styleActions[style.uid] || {
				on: style.addTo.bind(style, host),
				off: style.removeFrom.bind(style, host),
			});
			
			return action;
		}
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

		host.trigger('StyleContextChanged', {
			old: old,
			new: context,
		});
	}
	get Inline() {
		if (!this[$private].Inline) {
			this[$private].Inline = new StyleInline(this[$private].host);
		}
		return this[$private].Inline;
	}
	get namespace() {
		return false;
	}
}

exports(StyleBehavior).as('JSUI/Source/1.0.0/Classes/Behavior/Style');
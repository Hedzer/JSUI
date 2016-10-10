import Identity from 'Framework/Classes/Identity';
import Distinct from 'Framework/Classes/Distinct';
import StyleInline from 'Framework/Classes/StyleInline';

const identity = new Identity({
	class: 'StyleableHost',
	major: 1, minor: 0, patch: 0
});

export default class StyleableHost extends Distinct {
	constructor(host) {
		super();
		this.private.host = host;
		this.identity = identity;
	}
	get Inline() {
		var inline = this.private.Inline;
		if (!inline) {
			this.private.Inline = new StyleInline(this.private.host);
		}
		return inline;
	}
	get context() {
		return this.private.context;
	}
	set context(context) {
		let host = this.private.host;
		let old = this.private.context;

		if (old === context) {
			return;
		}

		this.private.context = context;
		Object.keys(host.private.style.rules).forEach((uid) => {
			let entry = host.private.style.rules[uid];
			Sheets[old].remove(entry.rule);
			entry.rule.render(this.private.context);
		});

		host.trigger('Style.contextChanged', {
			old: old,
			new: context
		});
	}
}
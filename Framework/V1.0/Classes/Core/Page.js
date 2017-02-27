import Identity from '/Framework/V1.0/Classes/Core/Identity';
import Main from '/Framework/V1.0/Classes/Elements/Main';
import Routable from '/Framework/V1.0/Mixins/Routable';
import isApplication from '/Framework/V1.0/TypeChecks/isApplication';

const identity = new Identity({
	class: 'Page',
	major: 1, minor: 0, patch: 0
});

export default class Page extends Routable(Main) {
	constructor(){
		super();
		this.identity = identity;
		this.Style.context = 'page';
	}
	static get route() {
		return 'Page';
	}
	static instantiate() {
		let instance = super.instantiate();
		instance.addTo(document.body);
		return instance;
	}
	set Context(context) {
		if (context) {
			let Application = context.Application;
			if (isApplication(Application)) {
				Application.Page = this;
			}
		}
		super.Context = context;
	}
	get Context() {
		return super.Context;
	}
}
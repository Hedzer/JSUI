
//Classes
import Identity from '/Framework/V1.0/Classes/Core/Identity';
import Main from '/Framework/V1.0/Classes/Elements/Main';

//Mixins
import Routable from '/Framework/V1.0/Mixins/Routable';

//TypeChecks
import isApplication from '/Framework/V1.0/TypeChecks/isApplication';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Page',
	major: 1, minor: 0, patch: 0,
});

export default class Page extends Main
	.implements(Routable) {

	constructor(){
		super();
		this.identity = identity;
		this.Style.context = 'page';
	}

	//pre-defined events
	onRouteTraversed(context) {
		if (context) {
			let Application = context.Application;
			if (isApplication(Application)) {
				Application.Page = this;
			}
		}
	}
}

exports(Page).as('/Framework/V1.0/Classes/Core/Page');


//Classes
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';
import Main from 'JSUI/Source/1.0.0/Classes/Elements/Main';

//Mixins
import Routable from 'JSUI/Source/1.0.0/Mixins/Routable';

//TypeChecks
import isApplication from 'JSUI/Source/1.0.0/TypeChecks/isApplication';

//Utilities
import exports from 'Parcello/exports';

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

exports(Page).as('JSUI/Source/1.0.0/Classes/Core/Page');


//Classes
import JSUIFunction from 'JSUI/Source/1.0.0/Classes/Core/Function';

//Mixins
import Routable from 'JSUI/Source/1.0.0/Mixins/Routable';

//Utilities
import exports from 'Parcello/exports';

export default class Endpoint extends JSUIFunction
	.implements(Routable) {
	
	constructor() {
		super();
		this.isRouteEndpoint = true;
		this.original = this.function;
	}

	//methods
	function(context) { /* endpoint code goes here */ }
	onRouteCompleted(context) {
		this.execute(context);
	}
}

exports(JSUIFunction).as('JSUI/Source/1.0.0/Classes/Core/JSUIFunction');

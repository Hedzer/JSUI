
//Classes
import JSUIFunction from '/JSUI/Source/V1.0/Classes/Core/Function';

//Mixins
import Routable from '/JSUI/Source/V1.0/Mixins/Routable';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

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

exports(JSUIFunction).as('/JSUI/Source/V1.0/Classes/Core/JSUIFunction');

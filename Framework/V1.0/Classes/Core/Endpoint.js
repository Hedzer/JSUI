import Routable from '/Framework/V1.0/Mixins/Routable';
import JSUIFunction from '/Framework/V1.0/Classes/Core/Function';

export default class Endpoint extends Routable(JSUIFunction) {
	constructor() {
		super();
		this.isRouteEndpoint = true;
		this.original = this.function;
	}
	function(context) { /* endpoint code goes here */ }
	onRouteCompleted(context) {
		this.execute(context);
	}
}
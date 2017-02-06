import Routable from '/Framework/V1.0/Mixins/Routable';
import JSUIFunction from '/Framework/V1.0/Classes/Core/Function';

export default class Endpoint extends Routable(JSUIFunction) {
	onRouteTraversed() {
		this.execute();
	}
}
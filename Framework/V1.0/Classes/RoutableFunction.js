import Routable from '/Framework/V1.0/Mixins/Routable';
import JSUIFunction from '/Framework/V1.0/Classes/JSUIFunction';

export default class RoutableFunction extends Routable(JSUIFunction) {
	onRouteTraversed() {
		this.execute();
	}
}
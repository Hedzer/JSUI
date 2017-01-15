import Routable from 'Framework/Mixins/Routable';
import JSUIFunction from 'Framework/Classes/JSUIFunction';

export default class RoutableFunction extends Routable(JSUIFunction) {
	onRouteTraversed() {
		this.execute();
	}
}
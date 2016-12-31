import Identity from 'Framework/Classes/Identity';
import Distinct from 'Framework/Classes/Distinct';
import Routable from 'Framework/Mixins/Routable';

const identity = new Identity({
	class: 'Feature',
	major: 1, minor: 0, patch: 0
});

export default class Feature extends Routable(Distinct) {
	constructor(){
		super();
		this.identity = identity;
	}
	static get route() {
		return 'Feature';
	}
}
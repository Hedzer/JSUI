import Identity from '/Framework/V1.0/Classes/Identity';
import Distinct from '/Framework/V1.0/Classes/Distinct';
import Routable from '/Framework/V1.0/Mixins/Routable';

const identity = new Identity({
	class: 'Role',
	major: 1, minor: 0, patch: 0
});

export default class Role extends Routable(Distinct) {
	constructor(){
		super();
		this.identity = identity;
	}
	static get route() {
		return 'Role';
	}
}
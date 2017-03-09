import Identity from '/Framework/V1.0/Classes/Core/Identity';

//Classes
import Distinct from '/Framework/V1.0/Classes/Core/Distinct';

//Mixins
import Routable from '/Framework/V1.0/Mixins/Routable';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Role',
	major: 1, minor: 0, patch: 0,
});

export default class Role extends Distinct
	.implements(Routable) {
	
	constructor(){
		super();
		this.identity = identity;
	}
}

exports(Role).as('/Framework/V1.0/Classes/Core/Role');

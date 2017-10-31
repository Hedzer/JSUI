
//Classes
import Distinct from 'JSUI/Source/1.0.0/Classes/Core/Distinct';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';

//Mixins
import Routable from 'JSUI/Source/1.0.0/Mixins/Routable';

//Utilities
import exports from 'Parcello/exports';

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

exports(Role).as('JSUI/Source/1.0.0/Classes/Core/Role');

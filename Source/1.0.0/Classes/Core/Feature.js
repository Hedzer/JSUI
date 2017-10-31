
//Classes
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';
import Distinct from 'JSUI/Source/1.0.0/Classes/Core/Distinct';

//Mixins
import Routable from 'JSUI/Source/1.0.0/Mixins/Routable';

//Utilities
import exports from 'Parcello/exports';

const identity = new Identity({
	class: 'Feature',
	major: 1, minor: 0, patch: 0,
});

export default class Feature extends Distinct
	.implements(Routable) {
	
	constructor(){
		super();
		this.identity = identity;
	}
}

exports(Feature).as('JSUI/Source/1.0.0/Classes/Core/Feature');


//Classes
import Identity from '/Framework/V1.0/Classes/Core/Identity';
import Distinct from '/Framework/V1.0/Classes/Core/Distinct';

//Mixins
import Routable from '/Framework/V1.0/Mixins/Routable';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Feature',
	major: 1, minor: 0, patch: 0,
});

export default class Feature extends Routable(Distinct) {
	constructor(){
		super();
		this.identity = identity;
	}
}

exports(Feature).as('/Framework/V1.0/Classes/Core/Feature');

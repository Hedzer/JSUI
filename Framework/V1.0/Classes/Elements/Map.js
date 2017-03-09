
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Map',
	major: 1, minor: 0, patch: 0,
});

export default class Map extends Element {
	constructor() {
		super('map');
		this.identity = identity;
	}
}

exports(Map).as('/Framework/V1.0/Classes/Elements/Map');

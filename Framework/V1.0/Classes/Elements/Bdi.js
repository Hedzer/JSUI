
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Bdi',
	major: 1, minor: 0, patch: 0,
});

export default class Bdi extends Element {
	constructor() {
		super('bdi');
		this.identity = identity;
	}
}

exports(Bdi).as('/Framework/V1.0/Classes/Elements/Bdi');

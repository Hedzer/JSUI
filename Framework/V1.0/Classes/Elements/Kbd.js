
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Kbd',
	major: 1, minor: 0, patch: 0,
});

export default class Kbd extends Element {
	constructor() {
		super('kbd');
		this.identity = identity;
	}
}

exports(Kbd).as('/Framework/V1.0/Classes/Elements/Kbd');

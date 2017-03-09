
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Rp',
	major: 1, minor: 0, patch: 0,
});

export default class Rp extends Element {
	constructor() {
		super('rp');
		this.identity = identity;
	}
}

exports(Rp).as('/Framework/V1.0/Classes/Elements/Rp');

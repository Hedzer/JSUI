
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'S',
	major: 1, minor: 0, patch: 0,
});

export default class S extends Element {
	constructor() {
		super('s');
		this.identity = identity;
	}
}

exports(S).as('/Framework/V1.0/Classes/Elements/S');


//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'H2',
	major: 1, minor: 0, patch: 0,
});

export default class H2 extends Element {
	constructor() {
		super('h2');
		this.identity = identity;
	}
}

exports(H2).as('/Framework/V1.0/Classes/Elements/H2');

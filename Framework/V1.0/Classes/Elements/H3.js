
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'H3',
	major: 1, minor: 0, patch: 0,
});

export default class H3 extends Element {
	constructor() {
		super('h3');
		this.identity = identity;
	}
}

exports(H3).as('/Framework/V1.0/Classes/Elements/H3');

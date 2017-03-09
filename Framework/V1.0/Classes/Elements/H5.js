
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'H5',
	major: 1, minor: 0, patch: 0,
});

export default class H5 extends Element {
	constructor() {
		super('h5');
		this.identity = identity;
	}
}

exports(H5).as('/Framework/V1.0/Classes/Elements/H5');


//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'A',
	major: 1, minor: 0, patch: 0,
});

export default class A extends Element {
	constructor() {
		super('a');
		this.identity = identity;
	}
}

exports(A).as('/Framework/V1.0/Classes/Elements/A');

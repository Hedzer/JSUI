
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Dd',
	major: 1, minor: 0, patch: 0,
});

export default class Dd extends Element {
	constructor() {
		super('dd');
		this.identity = identity;
	}
}

exports(Dd).as('/Framework/V1.0/Classes/Elements/Dd');

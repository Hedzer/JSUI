
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Thead',
	major: 1, minor: 0, patch: 0,
});

export default class Thead extends Element {
	constructor() {
		super('thead');
		this.identity = identity;
	}
}

exports(Thead).as('/Framework/V1.0/Classes/Elements/Thead');

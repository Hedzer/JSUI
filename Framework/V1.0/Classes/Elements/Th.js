
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Th',
	major: 1, minor: 0, patch: 0,
});

export default class Th extends Element {
	constructor() {
		super('th');
		this.identity = identity;
	}
}

exports(Th).as('/Framework/V1.0/Classes/Elements/Th');

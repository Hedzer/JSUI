
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Tr',
	major: 1, minor: 0, patch: 0,
});

export default class Tr extends Element {
	constructor() {
		super('tr');
		this.identity = identity;
	}
}

exports(Tr).as('/Framework/V1.0/Classes/Elements/Tr');

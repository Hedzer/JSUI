
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Tbody',
	major: 1, minor: 0, patch: 0,
});

export default class Tbody extends Element {
	constructor() {
		super('tbody');
		this.identity = identity;
	}
}

exports(Tbody).as('/Framework/V1.0/Classes/Elements/Tbody');

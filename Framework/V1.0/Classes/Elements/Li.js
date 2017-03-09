
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Li',
	major: 1, minor: 0, patch: 0,
});

export default class Li extends Element {
	constructor() {
		super('li');
		this.identity = identity;
	}
}

exports(Li).as('/Framework/V1.0/Classes/Elements/Li');


//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Strong',
	major: 1, minor: 0, patch: 0,
});

export default class Strong extends Element {
	constructor() {
		super('strong');
		this.identity = identity;
	}
}

exports(Strong).as('/Framework/V1.0/Classes/Elements/Strong');

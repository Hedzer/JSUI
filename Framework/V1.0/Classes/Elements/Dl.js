
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Dl',
	major: 1, minor: 0, patch: 0,
});

export default class Dl extends Element {
	constructor() {
		super('dl');
		this.identity = identity;
	}
}

exports(Dl).as('/Framework/V1.0/Classes/Elements/Dl');

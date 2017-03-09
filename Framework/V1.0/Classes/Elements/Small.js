
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Small',
	major: 1, minor: 0, patch: 0,
});

export default class Small extends Element {
	constructor() {
		super('small');
		this.identity = identity;
	}
}

exports(Small).as('/Framework/V1.0/Classes/Elements/Small');

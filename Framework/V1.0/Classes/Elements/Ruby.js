
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Ruby',
	major: 1, minor: 0, patch: 0,
});

export default class Ruby extends Element {
	constructor() {
		super('ruby');
		this.identity = identity;
	}
}

exports(Ruby).as('/Framework/V1.0/Classes/Elements/Ruby');

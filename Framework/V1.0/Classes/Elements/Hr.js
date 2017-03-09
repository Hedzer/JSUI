
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Hr',
	major: 1, minor: 0, patch: 0,
});

export default class Hr extends Element {
	constructor() {
		super('hr');
		this.identity = identity;
	}
}

exports(Hr).as('/Framework/V1.0/Classes/Elements/Hr');


//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Abbr',
	major: 1, minor: 0, patch: 0,
});

export default class Abbr extends Element {
	constructor() {
		super('abbr');
		this.identity = identity;
	}
}

exports(Abbr).as('/Framework/V1.0/Classes/Elements/Abbr');

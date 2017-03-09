
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Cite',
	major: 1, minor: 0, patch: 0,
});

export default class Cite extends Element {
	constructor() {
		super('cite');
		this.identity = identity;
	}
}

exports(Cite).as('/Framework/V1.0/Classes/Elements/Cite');

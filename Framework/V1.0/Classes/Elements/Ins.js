
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Ins',
	major: 1, minor: 0, patch: 0,
});

export default class Ins extends Element {
	constructor() {
		super('ins');
		this.identity = identity;
	}
}

exports(Ins).as('/Framework/V1.0/Classes/Elements/Ins');

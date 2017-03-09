
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Dt',
	major: 1, minor: 0, patch: 0,
});

export default class Dt extends Element {
	constructor() {
		super('dt');
		this.identity = identity;
	}
}

exports(Dt).as('/Framework/V1.0/Classes/Elements/Dt');

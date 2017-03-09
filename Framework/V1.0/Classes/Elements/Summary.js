
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Summary',
	major: 1, minor: 0, patch: 0,
});

export default class Summary extends Element {
	constructor() {
		super('summary');
		this.identity = identity;
	}
}

exports(Summary).as('/Framework/V1.0/Classes/Elements/Summary');

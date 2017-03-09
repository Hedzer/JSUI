
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Mark',
	major: 1, minor: 0, patch: 0,
});

export default class Mark extends Element {
	constructor() {
		super('mark');
		this.identity = identity;
	}
}

exports(Mark).as('/Framework/V1.0/Classes/Elements/Mark');

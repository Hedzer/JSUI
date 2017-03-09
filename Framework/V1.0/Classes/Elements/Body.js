
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Body',
	major: 1, minor: 0, patch: 0,
});

export default class Body extends Element {
	constructor() {
		super('body');
		this.identity = identity;
	}
}

exports(Body).as('/Framework/V1.0/Classes/Elements/Body');


//Classes
import Element from '/Framework/V1.0/Classes/Core/Element';
import Identity from '/Framework/V1.0/Classes/Core/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'H6',
	major: 1, minor: 0, patch: 0,
});

export default class H6 extends Element {
	constructor() {
		super('h6');
		this.identity = identity;
	}
}

exports(H6).as('/Framework/V1.0/Classes/Elements/H6');

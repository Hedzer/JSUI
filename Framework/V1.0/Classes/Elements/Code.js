
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Code',
	major: 1, minor: 0, patch: 0,
});

export default class Code extends Element {
	constructor() {
		super('code');
		this.identity = identity;
	}
}

exports(Code).as('/Framework/V1.0/Classes/Elements/Code');

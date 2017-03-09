
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Input',
	major: 1, minor: 0, patch: 0,
});

export default class Input extends Element {
	constructor() {
		super('input');
		this.identity = identity;
	}
}

exports(Input).as('/Framework/V1.0/Classes/Elements/Input');

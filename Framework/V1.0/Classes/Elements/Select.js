
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Select',
	major: 1, minor: 0, patch: 0,
});

export default class Select extends Element {
	constructor() {
		super('select');
		this.identity = identity;
	}
}

exports(Select).as('/Framework/V1.0/Classes/Elements/Select');

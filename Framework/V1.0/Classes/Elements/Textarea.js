
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Textarea',
	major: 1, minor: 0, patch: 0,
});

export default class Textarea extends Element {
	constructor() {
		super('textarea');
		this.identity = identity;
	}
}

exports(Textarea).as('/Framework/V1.0/Classes/Elements/Textarea');

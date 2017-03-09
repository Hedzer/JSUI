
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Col',
	major: 1, minor: 0, patch: 0,
});

export default class Col extends Element {
	constructor() {
		super('col');
		this.identity = identity;
	}
}

exports(Col).as('/Framework/V1.0/Classes/Elements/Col');

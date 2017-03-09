
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Caption',
	major: 1, minor: 0, patch: 0,
});

export default class Caption extends Element {
	constructor() {
		super('caption');
		this.identity = identity;
	}
}

exports(Caption).as('/Framework/V1.0/Classes/Elements/Caption');

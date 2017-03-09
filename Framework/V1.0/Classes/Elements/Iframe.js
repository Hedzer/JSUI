
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Iframe',
	major: 1, minor: 0, patch: 0,
});

export default class Iframe extends Element {
	constructor() {
		super('iframe');
		this.identity = identity;
	}
}

exports(Iframe).as('/Framework/V1.0/Classes/Elements/Iframe');


//Classes
import Element from '/Framework/V1.0/Classes/Core/Element';
import Identity from '/Framework/V1.0/Classes/Core/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Footer',
	major: 1, minor: 0, patch: 0,
});

export default class Footer extends Element {
	constructor() {
		super('footer');
		this.identity = identity;
	}
}

exports(Footer).as('/Framework/V1.0/Classes/Elements/Footer');

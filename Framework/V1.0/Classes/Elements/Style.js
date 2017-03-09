
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Style',
	major: 1, minor: 0, patch: 0,
});

export default class Style extends Element {
	constructor() {
		super('style');
		this.identity = identity;
	}
}

exports(Style).as('/Framework/V1.0/Classes/Elements/Style');

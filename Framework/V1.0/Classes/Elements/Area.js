
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Area',
	major: 1, minor: 0, patch: 0,
});

export default class Area extends Element {
	constructor() {
		super('area');
		this.identity = identity;
	}
}

exports(Area).as('/Framework/V1.0/Classes/Elements/Area');

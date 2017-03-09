
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Param',
	major: 1, minor: 0, patch: 0,
});

export default class Param extends Element {
	constructor() {
		super('param');
		this.identity = identity;
	}
}

exports(Param).as('/Framework/V1.0/Classes/Elements/Param');

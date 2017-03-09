
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Figure',
	major: 1, minor: 0, patch: 0,
});

export default class Figure extends Element {
	constructor() {
		super('figure');
		this.identity = identity;
	}
}

exports(Figure).as('/Framework/V1.0/Classes/Elements/Figure');

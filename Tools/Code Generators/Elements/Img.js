
//Classes
import Element from '/Framework/V1.0/Classes/Core/Element';
import Identity from '/Framework/V1.0/Classes/Core/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Img',
	major: 1, minor: 0, patch: 0,
});

export default class Img extends Element {
	constructor() {
		super('img');
		this.identity = identity;
	}
}

exports(Img).as('/Framework/V1.0/Classes/Elements/Img');

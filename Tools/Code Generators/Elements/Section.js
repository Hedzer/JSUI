
//Classes
import Element from '/Framework/V1.0/Classes/Core/Element';
import Identity from '/Framework/V1.0/Classes/Core/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Section',
	major: 1, minor: 0, patch: 0,
});

export default class Section extends Element {
	constructor() {
		super('section');
		this.identity = identity;
	}
}

exports(Section).as('/Framework/V1.0/Classes/Elements/Section');

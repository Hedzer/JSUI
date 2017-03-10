
//Classes
import Element from '/Framework/V1.0/Classes/Core/Element';
import Identity from '/Framework/V1.0/Classes/Core/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Embed',
	major: 1, minor: 0, patch: 0,
});

export default class Embed extends Element {
	constructor() {
		super('embed');
		this.identity = identity;
	}
}

exports(Embed).as('/Framework/V1.0/Classes/Elements/Embed');

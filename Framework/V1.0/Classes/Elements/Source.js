
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Source',
	major: 1, minor: 0, patch: 0,
});

export default class Source extends Element {
	constructor() {
		super('source');
		this.identity = identity;
	}
}

exports(Source).as('/Framework/V1.0/Classes/Elements/Source');

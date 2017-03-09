
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Audio',
	major: 1, minor: 0, patch: 0,
});

export default class Audio extends Element {
	constructor() {
		super('audio');
		this.identity = identity;
	}
}

exports(Audio).as('/Framework/V1.0/Classes/Elements/Audio');

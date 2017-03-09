
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Video',
	major: 1, minor: 0, patch: 0,
});

export default class Video extends Element {
	constructor() {
		super('video');
		this.identity = identity;
	}
}

exports(Video).as('/Framework/V1.0/Classes/Elements/Video');


//Classes
import Element from '/JSUI/Source/V1.0/Classes/Core/Element';
import Identity from '/JSUI/Source/V1.0/Classes/Core/Identity';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Track',
	major: 1, minor: 0, patch: 0,
});

export default class Track extends Element {
	constructor() {
		super('track');
		this.identity = identity;
	}
}

exports(Track).as('/JSUI/Source/V1.0/Classes/Elements/Track');
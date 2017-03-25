
//Classes
import Element from '/JSUI/Source/V1.0/Classes/Core/Element';
import Identity from '/JSUI/Source/V1.0/Classes/Core/Identity';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Dl',
	major: 1, minor: 0, patch: 0,
});

export default class Dl extends Element {
	constructor() {
		super('dl');
		this.identity = identity;
	}
}

exports(Dl).as('/JSUI/Source/V1.0/Classes/Elements/Dl');

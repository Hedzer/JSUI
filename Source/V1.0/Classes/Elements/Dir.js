
//Classes
import Element from '/JSUI/Source/V1.0/Classes/Core/Element';
import Identity from '/JSUI/Source/V1.0/Classes/Core/Identity';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Dir',
	major: 1, minor: 0, patch: 0,
});

export default class Dir extends Element {
	constructor() {
		super('dir');
		this.identity = identity;
	}
}

exports(Dir).as('/JSUI/Source/V1.0/Classes/Elements/Dir');

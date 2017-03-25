
//Classes
import Element from '/JSUI/Source/V1.0/Classes/Core/Element';
import Identity from '/JSUI/Source/V1.0/Classes/Core/Identity';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'H2',
	major: 1, minor: 0, patch: 0,
});

export default class H2 extends Element {
	constructor() {
		super('h2');
		this.identity = identity;
	}
}

exports(H2).as('/JSUI/Source/V1.0/Classes/Elements/H2');

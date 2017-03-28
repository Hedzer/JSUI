
//Classes
import Element from '/JSUI/Source/1.0.0/Classes/Core/Element';
import Identity from '/JSUI/Source/1.0.0/Classes/Core/Identity';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Dd',
	major: 1, minor: 0, patch: 0,
});

export default class Dd extends Element {
	constructor() {
		super('dd');
		this.identity = identity;
	}
}

exports(Dd).as('/JSUI/Source/1.0.0/Classes/Elements/Dd');

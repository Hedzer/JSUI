
//Classes
import Element from '/JSUI/Source/V1.0/Classes/Core/Element';
import Identity from '/JSUI/Source/V1.0/Classes/Core/Identity';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Figcaption',
	major: 1, minor: 0, patch: 0,
});

export default class Figcaption extends Element {
	constructor() {
		super('figcaption');
		this.identity = identity;
	}
}

exports(Figcaption).as('/JSUI/Source/V1.0/Classes/Elements/Figcaption');

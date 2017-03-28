
//Classes
import Element from '/JSUI/Source/1.0.0/Classes/Core/Element';
import Identity from '/JSUI/Source/1.0.0/Classes/Core/Identity';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Thead',
	major: 1, minor: 0, patch: 0,
});

export default class Thead extends Element {
	constructor() {
		super('thead');
		this.identity = identity;
	}
}

exports(Thead).as('/JSUI/Source/1.0.0/Classes/Elements/Thead');
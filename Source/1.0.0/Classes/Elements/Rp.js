
//Classes
import Element from 'JSUI/Source/1.0.0/Classes/Core/Element';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';

//Utilities
import exports from 'Parcello/exports';

const identity = new Identity({
	class: 'Rp',
	major: 1, minor: 0, patch: 0,
});

export default class Rp extends Element {
	constructor() {
		super('rp');
		this.identity = identity;
	}
}

exports(Rp).as('JSUI/Source/1.0.0/Classes/Elements/Rp');

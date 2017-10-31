
//Classes
import Element from 'JSUI/Source/1.0.0/Classes/Core/Element';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';

//Utilities
import exports from 'Parcello/exports';

const identity = new Identity({
	class: 'Br',
	major: 1, minor: 0, patch: 0,
});

export default class Br extends Element {
	constructor() {
		super('br');
		this.identity = identity;
	}
}

exports(Br).as('JSUI/Source/1.0.0/Classes/Elements/Br');

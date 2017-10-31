
//Classes
import Element from 'JSUI/Source/1.0.0/Classes/Core/Element';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';

//Utilities
import exports from 'Parcello/exports';

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

exports(H2).as('JSUI/Source/1.0.0/Classes/Elements/H2');

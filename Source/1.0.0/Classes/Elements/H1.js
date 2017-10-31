
//Classes
import Element from 'JSUI/Source/1.0.0/Classes/Core/Element';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';

//Utilities
import exports from 'Parcello/exports';

const identity = new Identity({
	class: 'H1',
	major: 1, minor: 0, patch: 0,
});

export default class H1 extends Element {
	constructor() {
		super('h1');
		this.identity = identity;
	}
}

exports(H1).as('JSUI/Source/1.0.0/Classes/Elements/H1');

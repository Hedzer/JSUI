
//Classes
import Element from 'JSUI/Source/1.0.0/Classes/Core/Element';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';

//Utilities
import exports from 'Parcello/exports';

const identity = new Identity({
	class: 'Body',
	major: 1, minor: 0, patch: 0,
});

export default class Body extends Element {
	constructor() {
		super('body');
		this.identity = identity;
	}
}

exports(Body).as('JSUI/Source/1.0.0/Classes/Elements/Body');

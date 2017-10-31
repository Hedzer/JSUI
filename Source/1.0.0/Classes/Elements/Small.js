
//Classes
import Element from 'JSUI/Source/1.0.0/Classes/Core/Element';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';

//Utilities
import exports from 'Parcello/exports';

const identity = new Identity({
	class: 'Small',
	major: 1, minor: 0, patch: 0,
});

export default class Small extends Element {
	constructor() {
		super('small');
		this.identity = identity;
	}
}

exports(Small).as('JSUI/Source/1.0.0/Classes/Elements/Small');

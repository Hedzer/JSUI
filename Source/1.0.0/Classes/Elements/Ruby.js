
//Classes
import Element from 'JSUI/Source/1.0.0/Classes/Core/Element';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';

//Utilities
import exports from 'Parcello/exports';

const identity = new Identity({
	class: 'Ruby',
	major: 1, minor: 0, patch: 0,
});

export default class Ruby extends Element {
	constructor() {
		super('ruby');
		this.identity = identity;
	}
}

exports(Ruby).as('JSUI/Source/1.0.0/Classes/Elements/Ruby');

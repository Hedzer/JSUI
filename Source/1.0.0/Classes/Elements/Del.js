
//Classes
import Element from 'JSUI/Source/1.0.0/Classes/Core/Element';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';

//Utilities
import exports from 'Parcello/exports';

const identity = new Identity({
	class: 'Del',
	major: 1, minor: 0, patch: 0,
});

export default class Del extends Element {
	constructor() {
		super('del');
		this.identity = identity;
	}
}

exports(Del).as('JSUI/Source/1.0.0/Classes/Elements/Del');

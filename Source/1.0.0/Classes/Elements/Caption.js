
//Classes
import Element from 'JSUI/Source/1.0.0/Classes/Core/Element';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';

//Utilities
import exports from 'Parcello/exports';

const identity = new Identity({
	class: 'Caption',
	major: 1, minor: 0, patch: 0,
});

export default class Caption extends Element {
	constructor() {
		super('caption');
		this.identity = identity;
	}
}

exports(Caption).as('JSUI/Source/1.0.0/Classes/Elements/Caption');

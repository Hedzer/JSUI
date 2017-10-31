
//Classes
import Element from 'JSUI/Source/1.0.0/Classes/Core/Element';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';

//Utilities
import exports from 'Parcello/exports';

const identity = new Identity({
	class: 'Iframe',
	major: 1, minor: 0, patch: 0,
});

export default class Iframe extends Element {
	constructor() {
		super('iframe');
		this.identity = identity;
	}
}

exports(Iframe).as('JSUI/Source/1.0.0/Classes/Elements/Iframe');

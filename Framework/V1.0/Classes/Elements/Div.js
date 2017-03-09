
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Div',
	major: 1, minor: 0, patch: 0,
});

export default class Div extends Element {
	constructor() {
		super('div');
		this.identity = identity;
	}
}

exports(Div).as('/Framework/V1.0/Classes/Elements/Div');

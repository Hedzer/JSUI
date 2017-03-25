
//Classes
import Element from '/Framework/V1.0/Classes/Core/Element';
import Identity from '/Framework/V1.0/Classes/Core/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Form',
	major: 1, minor: 0, patch: 0,
});

export default class Form extends Element {
	constructor() {
		super('form');
		this.identity = identity;
	}
}

exports(Form).as('/Framework/V1.0/Classes/Elements/Form');

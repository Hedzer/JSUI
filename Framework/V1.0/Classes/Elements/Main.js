
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Main',
	major: 1, minor: 0, patch: 0,
});

export default class Main extends Element {
	constructor() {
		super('main');
		this.identity = identity;
	}
}

exports(Main).as('/Framework/V1.0/Classes/Elements/Main');

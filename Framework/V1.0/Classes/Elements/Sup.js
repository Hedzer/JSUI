
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Sup',
	major: 1, minor: 0, patch: 0,
});

export default class Sup extends Element {
	constructor() {
		super('sup');
		this.identity = identity;
	}
}

exports(Sup).as('/Framework/V1.0/Classes/Elements/Sup');


//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Datalist',
	major: 1, minor: 0, patch: 0,
});

export default class Datalist extends Element {
	constructor() {
		super('datalist');
		this.identity = identity;
	}
}

exports(Datalist).as('/Framework/V1.0/Classes/Elements/Datalist');

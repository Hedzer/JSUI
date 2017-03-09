
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Table',
	major: 1, minor: 0, patch: 0,
});

export default class Table extends Element {
	constructor() {
		super('table');
		this.identity = identity;
	}
}

exports(Table).as('/Framework/V1.0/Classes/Elements/Table');

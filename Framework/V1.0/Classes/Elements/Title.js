
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Title',
	major: 1, minor: 0, patch: 0,
});

export default class Title extends Element {
	constructor() {
		super('title');
		this.identity = identity;
	}
}

exports(Title).as('/Framework/V1.0/Classes/Elements/Title');

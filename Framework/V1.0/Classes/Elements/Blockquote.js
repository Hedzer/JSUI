
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Blockquote',
	major: 1, minor: 0, patch: 0,
});

export default class Blockquote extends Element {
	constructor() {
		super('blockquote');
		this.identity = identity;
	}
}

exports(Blockquote).as('/Framework/V1.0/Classes/Elements/Blockquote');

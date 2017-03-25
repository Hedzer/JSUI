
//Classes
import Element from '/JSUI/Source/V1.0/Classes/Core/Element';
import Identity from '/JSUI/Source/V1.0/Classes/Core/Identity';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

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

exports(Blockquote).as('/JSUI/Source/V1.0/Classes/Elements/Blockquote');


//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Button',
	major: 1, minor: 0, patch: 0,
});

export default class Button extends Element {
	constructor() {
		super('button');
		this.identity = identity;
	}
}

exports(Button).as('/Framework/V1.0/Classes/Elements/Button');

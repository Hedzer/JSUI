import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Legend',
	major: 1, minor: 0, patch: 0
});

export default class Legend extends Element {
	constructor() {
		super('legend');
		this.identity = identity;
	}
}
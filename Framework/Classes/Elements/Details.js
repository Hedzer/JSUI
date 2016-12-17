import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Details',
	major: 1, minor: 0, patch: 0
});

export default class Details extends Element {
	constructor() {
		super('details');
		this.identity = identity;
	}
}
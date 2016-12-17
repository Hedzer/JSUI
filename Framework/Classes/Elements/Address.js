import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Address',
	major: 1, minor: 0, patch: 0
});

export default class Address extends Element {
	constructor() {
		super('address');
		this.identity = identity;
	}
}
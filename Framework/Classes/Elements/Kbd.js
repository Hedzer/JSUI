import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Kbd',
	major: 1, minor: 0, patch: 0
});

export default class Kbd extends Element {
	constructor() {
		super('kbd');
		this.identity = identity;
	}
}
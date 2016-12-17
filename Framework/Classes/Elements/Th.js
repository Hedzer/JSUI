import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Th',
	major: 1, minor: 0, patch: 0
});

export default class Th extends Element {
	constructor() {
		super('th');
		this.identity = identity;
	}
}
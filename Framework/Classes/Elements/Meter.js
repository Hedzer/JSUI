import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Meter',
	major: 1, minor: 0, patch: 0
});

export default class Meter extends Element {
	constructor() {
		super('meter');
		this.identity = identity;
	}
}
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Thead',
	major: 1, minor: 0, patch: 0
});

export default class Thead extends Element {
	constructor() {
		super('thead');
		this.identity = identity;
	}
}
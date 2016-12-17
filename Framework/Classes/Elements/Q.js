import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Q',
	major: 1, minor: 0, patch: 0
});

export default class Q extends Element {
	constructor() {
		super('q');
		this.identity = identity;
	}
}
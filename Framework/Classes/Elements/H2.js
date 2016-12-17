import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'H2',
	major: 1, minor: 0, patch: 0
});

export default class H2 extends Element {
	constructor() {
		super('h2');
		this.identity = identity;
	}
}
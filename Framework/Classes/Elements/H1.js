import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'H1',
	major: 1, minor: 0, patch: 0
});

export default class H1 extends Element {
	constructor() {
		super('h1');
		this.identity = identity;
	}
}
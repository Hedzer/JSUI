import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'H3',
	major: 1, minor: 0, patch: 0
});

export default class H3 extends Element {
	constructor() {
		super('h3');
		this.identity = identity;
	}
}
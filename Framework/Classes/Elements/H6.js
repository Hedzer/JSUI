import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'H6',
	major: 1, minor: 0, patch: 0
});

export default class H6 extends Element {
	constructor() {
		super('h6');
		this.identity = identity;
	}
}
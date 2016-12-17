import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Body',
	major: 1, minor: 0, patch: 0
});

export default class Body extends Element {
	constructor() {
		super('body');
		this.identity = identity;
	}
}
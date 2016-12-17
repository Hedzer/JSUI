import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'A',
	major: 1, minor: 0, patch: 0
});

export default class A extends Element {
	constructor() {
		super('a');
		this.identity = identity;
	}
}
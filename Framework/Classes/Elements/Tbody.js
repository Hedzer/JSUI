import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Tbody',
	major: 1, minor: 0, patch: 0
});

export default class Tbody extends Element {
	constructor() {
		super('tbody');
		this.identity = identity;
	}
}
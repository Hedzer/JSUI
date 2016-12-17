import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Li',
	major: 1, minor: 0, patch: 0
});

export default class Li extends Element {
	constructor() {
		super('li');
		this.identity = identity;
	}
}
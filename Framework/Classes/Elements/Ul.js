import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Ul',
	major: 1, minor: 0, patch: 0
});

export default class Ul extends Element {
	constructor() {
		super('ul');
		this.identity = identity;
	}
}
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Dd',
	major: 1, minor: 0, patch: 0
});

export default class Dd extends Element {
	constructor() {
		super('dd');
		this.identity = identity;
	}
}
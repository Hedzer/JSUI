import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Ol',
	major: 1, minor: 0, patch: 0
});

export default class Ol extends Element {
	constructor() {
		super('ol');
		this.identity = identity;
	}
}
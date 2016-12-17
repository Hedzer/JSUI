import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Br',
	major: 1, minor: 0, patch: 0
});

export default class Br extends Element {
	constructor() {
		super('br');
		this.identity = identity;
	}
}
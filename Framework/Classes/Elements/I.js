import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'I',
	major: 1, minor: 0, patch: 0
});

export default class I extends Element {
	constructor() {
		super('i');
		this.identity = identity;
	}
}
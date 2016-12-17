import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'U',
	major: 1, minor: 0, patch: 0
});

export default class U extends Element {
	constructor() {
		super('u');
		this.identity = identity;
	}
}
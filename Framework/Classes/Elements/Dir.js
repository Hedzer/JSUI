import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Dir',
	major: 1, minor: 0, patch: 0
});

export default class Dir extends Element {
	constructor() {
		super('dir');
		this.identity = identity;
	}
}
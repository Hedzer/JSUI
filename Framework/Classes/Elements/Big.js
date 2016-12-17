import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Big',
	major: 1, minor: 0, patch: 0
});

export default class Big extends Element {
	constructor() {
		super('big');
		this.identity = identity;
	}
}
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Html',
	major: 1, minor: 0, patch: 0
});

export default class Html extends Element {
	constructor() {
		super('html');
		this.identity = identity;
	}
}
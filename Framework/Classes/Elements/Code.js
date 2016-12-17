import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Code',
	major: 1, minor: 0, patch: 0
});

export default class Code extends Element {
	constructor() {
		super('code');
		this.identity = identity;
	}
}
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Del',
	major: 1, minor: 0, patch: 0
});

export default class Del extends Element {
	constructor() {
		super('del');
		this.identity = identity;
	}
}
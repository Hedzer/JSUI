import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Sub',
	major: 1, minor: 0, patch: 0
});

export default class Sub extends Element {
	constructor() {
		super('sub');
		this.identity = identity;
	}
}
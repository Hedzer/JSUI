import Element from '/Framework/V1.0/Classes/Element';
import Identity from '/Framework/V1.0/Classes/Identity';

const identity = new Identity({
	class: 'H4',
	major: 1, minor: 0, patch: 0
});

export default class H4 extends Element {
	constructor() {
		super('h4');
		this.identity = identity;
	}
}
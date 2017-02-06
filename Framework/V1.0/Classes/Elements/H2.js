import Element from '/Framework/V1.0/Classes/Core/Element';
import Identity from '/Framework/V1.0/Classes/Core/Identity';

const identity = new Identity({
	class: 'H2',
	major: 1, minor: 0, patch: 0
});

export default class H2 extends Element {
	constructor() {
		super('h2');
		this.identity = identity;
	}
}
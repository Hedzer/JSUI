import Element from '/Framework/V1.0/Classes/Core/Element';
import Identity from '/Framework/V1.0/Classes/Core/Identity';

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
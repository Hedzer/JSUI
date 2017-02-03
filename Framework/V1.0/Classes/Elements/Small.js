import Element from '/Framework/V1.0/Classes/Element';
import Identity from '/Framework/V1.0/Classes/Identity';

const identity = new Identity({
	class: 'Small',
	major: 1, minor: 0, patch: 0
});

export default class Small extends Element {
	constructor() {
		super('small');
		this.identity = identity;
	}
}
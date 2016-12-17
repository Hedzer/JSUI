import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

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
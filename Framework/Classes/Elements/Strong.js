import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Strong',
	major: 1, minor: 0, patch: 0
});

export default class Strong extends Element {
	constructor() {
		super('strong');
		this.identity = identity;
	}
}
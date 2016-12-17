import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Summary',
	major: 1, minor: 0, patch: 0
});

export default class Summary extends Element {
	constructor() {
		super('summary');
		this.identity = identity;
	}
}
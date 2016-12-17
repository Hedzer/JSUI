import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Dl',
	major: 1, minor: 0, patch: 0
});

export default class Dl extends Element {
	constructor() {
		super('dl');
		this.identity = identity;
	}
}
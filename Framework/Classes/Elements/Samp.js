import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Samp',
	major: 1, minor: 0, patch: 0
});

export default class Samp extends Element {
	constructor() {
		super('samp');
		this.identity = identity;
	}
}
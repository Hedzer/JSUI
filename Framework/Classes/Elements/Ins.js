import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Ins',
	major: 1, minor: 0, patch: 0
});

export default class Ins extends Element {
	constructor() {
		super('ins');
		this.identity = identity;
	}
}
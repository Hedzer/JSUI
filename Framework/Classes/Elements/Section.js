import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Section',
	major: 1, minor: 0, patch: 0
});

export default class Section extends Element {
	constructor() {
		super('section');
		this.identity = identity;
	}
}
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Select',
	major: 1, minor: 0, patch: 0
});

export default class Select extends Element {
	constructor() {
		super('select');
		this.identity = identity;
	}
}
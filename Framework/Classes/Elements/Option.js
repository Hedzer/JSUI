import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Option',
	major: 1, minor: 0, patch: 0
});

export default class Option extends Element {
	constructor() {
		super('option');
		this.identity = identity;
	}
}
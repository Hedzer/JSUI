import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Form',
	major: 1, minor: 0, patch: 0
});

export default class Form extends Element {
	constructor() {
		super('form');
		this.identity = identity;
	}
}
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Fieldset',
	major: 1, minor: 0, patch: 0
});

export default class Fieldset extends Element {
	constructor() {
		super('fieldset');
		this.identity = identity;
	}
}
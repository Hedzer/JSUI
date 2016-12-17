import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Base',
	major: 1, minor: 0, patch: 0
});

export default class Base extends Element {
	constructor() {
		super('base');
		this.identity = identity;
	}
}
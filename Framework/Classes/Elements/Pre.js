import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Pre',
	major: 1, minor: 0, patch: 0
});

export default class Pre extends Element {
	constructor() {
		super('pre');
		this.identity = identity;
	}
}
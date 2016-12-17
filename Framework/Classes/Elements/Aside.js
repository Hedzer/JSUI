import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Aside',
	major: 1, minor: 0, patch: 0
});

export default class Aside extends Element {
	constructor() {
		super('aside');
		this.identity = identity;
	}
}
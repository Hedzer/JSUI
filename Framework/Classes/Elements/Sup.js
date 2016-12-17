import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Sup',
	major: 1, minor: 0, patch: 0
});

export default class Sup extends Element {
	constructor() {
		super('sup');
		this.identity = identity;
	}
}